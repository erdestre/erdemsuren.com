import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { DIAGRAMS } from "../components/diagrams/index.js";
import { hostOf, liveSites, pick } from "../components/projects/pick.js";
import ProjectCta from "../components/projects/ProjectCta.jsx";
import ProjectImage from "../components/projects/ProjectImage.jsx";
import { Badge, ButtonLink, PageHeader, Section, TagList } from "../components/ui/index.js";
import common from "../content/common.js";
import { getProjectDetails } from "../content/projectDetails.js";
import projectsCopy, { getProject, PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";
import NotFound from "./NotFound.jsx";

const twoDigits = (n) => String(n).padStart(2, "0");

// A host name in a title ("belbim.istanbul"). At the 36px mobile h1 size, hosts of up to 15 characters fit on one
// line even at 320px with a classic scrollbar (263px; "belbim.istanbul" measures 258px). "istanbulkart.istanbul"
// (21 characters, about 350px) does not, so longer hosts may break after their dots.
const HOST_NAME = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/;
const HOST_FITS_ONE_LINE = 15;
const breaksHost = (word) => HOST_NAME.test(word) && word.length > HOST_FITS_ONE_LINE;

/**
 * The h1 text: a long host name gets a line-break opportunity (<wbr>) after each of its dots, so it never overflows a
 * small screen, and shorter ones are never split. The text between the breaks stays one string. Titles without a long
 * host stay plain strings, so PageHeader still keeps their short hyphenated words together.
 */
function headingTitle(title) {
  const parts = title.split(/(\s+)/);
  if (!parts.some(breaksHost)) return title;
  const out = [];
  let text = "";
  for (const part of parts) {
    if (!breaksHost(part)) {
      text += part;
      continue;
    }
    part.split(".").forEach((label, index) => {
      if (index > 0) {
        out.push(`${text}.`, <wbr key={out.length} />);
        text = "";
      }
      text += label;
    });
  }
  if (text) out.push(text);
  return out;
}

/** Small mono section number + the block's h2 ("notebook" labels, §B.6). The number is decorative. */
function BlockHeading({ id, number, children }) {
  return (
    <>
      <p aria-hidden="true" className="font-mono text-xs text-muted">
        {twoDigits(number)}
      </p>
      <h2 id={id} className="mt-1 text-2xl font-semibold text-ink">
        {children}
      </h2>
    </>
  );
}

/** One case-study block: label column + content column from lg, stacked below. */
function Block({ id, number, title, children }) {
  return (
    <section
      aria-labelledby={id}
      className="grid grid-cols-1 gap-x-12 gap-y-5 py-10 first:pt-0 last:pb-0 lg:grid-cols-[13rem_minmax(0,1fr)] lg:py-12"
    >
      <div className="lg:sticky lg:top-24 lg:self-start">
        <BlockHeading id={id} number={number}>
          {title}
        </BlockHeading>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Bullets({ items, icon = false }) {
  return (
    <ul className="max-w-measure space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          {icon ? (
            <FiCheck aria-hidden="true" className="mt-[0.3em] size-4 shrink-0 text-accent" />
          ) : (
            <span aria-hidden="true" className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Fact({ label, children }) {
  return (
    <div className="min-w-0">
      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-1.5 font-medium text-ink">{children}</dd>
    </div>
  );
}

// Case-study template (§B.2): breadcrumbs · h1 · lead · facts · Context · What I did · Architecture (diagram) ·
// Outcome · Stack · Screens · Links · dual CTA (§B.5, ProjectCta, shared with the projects index) + next case study. Blocks without facts are left out.
export default function ProjectDetail() {
  const lang = useLang();
  const { slug } = useParams();
  const project = getProject(slug);
  // Unknown slug: the server serves 404.html for it, so render the identical NotFound page (hydration-safe).
  if (!project) return <NotFound />;

  // Long copy (context, what I did, outcome, screenshot alt/caption) lives in projectDetails.js (this page's chunk);
  // that module checks that every published slug has its context and "what I did".
  const details = getProjectDetails(project.slug);
  const t = projectsCopy[lang];
  const c = common[lang];
  const title = project.title[lang];
  const isLive = project.status === "live";
  // One live site → "Visit site" in the header; several (BELBİM) → one button per site, labeled with its host.
  const sites = liveSites(project);
  const links = project.links ?? sites.map((href) => ({ href, label: hostOf(href) }));
  // Screenshots: the case study's `screens` (one per site), or the project's single `image` with `imageAlt`/`caption`.
  const screens =
    details.screens ?? (project.image ? [{ image: project.image, alt: details.imageAlt, caption: details.caption }] : []);
  const next = PROJECTS[(PROJECTS.findIndex((item) => item.slug === project.slug) + 1) % PROJECTS.length];
  // DIAGRAMS hook (shared contract, scratchpad/foundation-notes/CONTRACTS.md §8): a registered diagram for this slug.
  const Diagram = DIAGRAMS[project.slug] ?? null;

  // Section numbers follow the blocks that are actually rendered.
  let number = 0;
  const block = (id, label, content) => (
    <Block key={id} id={id} number={++number} title={label}>
      {content}
    </Block>
  );

  const before = [
    block(
      "context-title",
      t.labels.context,
      <div className="max-w-measure space-y-4">
        {details.context[lang].map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>,
    ),
    block(
      "did-title",
      t.labels.did,
      <>
        <Bullets items={details.did[lang]} />
        {details.didNote ? <p className="mt-5 max-w-measure text-muted">{details.didNote[lang]}</p> : null}
      </>,
    ),
  ];

  const architectureNumber = Diagram ? ++number : null;

  const after = [
    details.outcome ? block("outcome-title", t.labels.outcome, <Bullets items={details.outcome[lang]} icon />) : null,
    block("stack-title", t.labels.stack, <TagList items={project.stack} />),
    screens.length
      ? block(
          "screens-title",
          t.labels.screens,
          <div className="space-y-8">
            {screens.map((screen) => (
              <figure
                key={screen.image}
                className="overflow-hidden rounded-xl border border-line bg-surface shadow-card"
              >
                <ProjectImage
                  image={screen.image}
                  alt={screen.alt[lang]}
                  sizes="(min-width: 1152px) 832px, (min-width: 1024px) calc(100vw - 21rem), calc(100vw - 2.5rem)"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">{screen.caption[lang]}</figcaption>
              </figure>
            ))}
          </div>,
        )
      : null,
    links.length
      ? block(
          "links-title",
          t.labels.links,
          <ul className="flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.href} className="min-w-0">
                <ButtonLink href={link.href} external variant="secondary">
                  {pick(link.label, lang)}
                </ButtonLink>
              </li>
            ))}
          </ul>,
        )
      : null,
  ].filter(Boolean);

  return (
    <>
      <Seo page="project" params={{ slug: project.slug }} project={project} />

      <PageHeader
        before={
          <Breadcrumbs
            items={[
              { label: c.nav.home, to: pathFor("home", lang) },
              { label: c.nav.projects, to: pathFor("projects", lang) },
              { label: title },
            ]}
          />
        }
        eyebrow={t.labels.caseStudy}
        title={headingTitle(title)}
        intro={project.summary[lang]}
      >
        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 rounded-xl border border-line bg-surface p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
          <Fact label={t.labels.type}>
            {keepDots(project.org ? `${t.type[project.type]} · ${project.org}` : t.type[project.type])}
          </Fact>
          <Fact label={t.labels.period}>{project.period[lang]}</Fact>
          <Fact label={t.labels.role}>{project.role[lang]}</Fact>
          <Fact label={t.labels.status}>
            {isLive ? (
              <Badge tone="signal" dot>
                {project.statusText[lang]}
              </Badge>
            ) : (
              project.statusText[lang]
            )}
          </Fact>
        </dl>
        {sites.length ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {sites.length === 1 ? (
              <ButtonLink href={sites[0]} external variant="secondary">
                {c.cta.visitSite}
              </ButtonLink>
            ) : (
              sites.map((href) => (
                <ButtonLink key={href} href={href} external variant="secondary">
                  {hostOf(href)}
                </ButtonLink>
              ))
            )}
          </div>
        ) : null}
      </PageHeader>

      {/* Each block is its own labelled <section>; the wrappers are plain divs. */}
      {Diagram ? (
        <>
          <Section as="div" containerClassName="divide-y divide-line">
            {before}
          </Section>

          {/* DIAGRAMS hook (shared contract): keep this block, or move it as a whole, when restructuring the page. */}
          <Section tone="surface" labelledBy="architecture-title">
            <BlockHeading id="architecture-title" number={architectureNumber}>
              {t.labels.architecture}
            </BlockHeading>
            <div className="mt-8">
              <Diagram lang={lang} />
            </div>
          </Section>

          <Section as="div" containerClassName="divide-y divide-line">
            {after}
          </Section>
        </>
      ) : (
        <Section as="div" containerClassName="divide-y divide-line">
          {before}
          {after}
        </Section>
      )}

      <ProjectCta>
        <nav
          aria-label={t.labels.moreCaseStudies}
          className="mt-12 flex flex-col gap-4 border-t border-on-ink/15 pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <Link to={pathFor("project", lang, { slug: next.slug })} className="group flex min-h-11 min-w-0 flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-on-ink-muted">{t.labels.next}</span>
            <span className="mt-1 flex items-center gap-2 text-lg font-semibold text-on-ink underline-offset-4 group-hover:underline">
              {next.title[lang]}
              <FiArrowRight aria-hidden="true" className="size-4 shrink-0 text-accent-on-ink" />
            </span>
          </Link>
          <Link to={pathFor("projects", lang)} className="link-on-ink inline-flex min-h-11 items-center self-start sm:self-auto">
            {c.cta.allProjects}
          </Link>
        </nav>
      </ProjectCta>
    </>
  );
}
