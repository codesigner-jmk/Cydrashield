import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, CircleDot,
  Eye, FileCheck2, Fingerprint, Menu, Network, ScanEye, Shield, X,
} from 'lucide-react'

const sections = [
  ['Why CydraShield', '#why'], ['Capabilities', '#capabilities'],
  ['How it works', '#how'], ["Who it’s for", '#use-cases'],
]

function Brand() {
  return <a className="flex items-center gap-3 font-extrabold tracking-[-.05em]" href="#top" aria-label="CydraShield home">
    <span className="brand-mark"><i /></span><span>CydraShield</span>
  </a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-40 border-b border-[#dce2e0] bg-[#f3f5f4]/95 backdrop-blur-xl">
    <div className="site-wrap flex h-[70px] items-center justify-between">
      <Brand />
      <nav className={`${open ? 'mobile-nav-open' : 'mobile-nav-closed'} nav-links`}>
        {sections.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="button button-dark hidden sm:inline-flex" href="#demo">Request a demo <ArrowUpRight size={14} /></a>
      <button className="p-2 sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </div>
  </header>
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? 'text-[#83bdc2]' : ''}`}><span />{children}</div>
}

function ActivityPanel() {
  const [decision, setDecision] = useState(0)
  const labels = ['Approval required', 'Request denied', 'Approved once']
  useEffect(() => {
    const timer = setInterval(() => setDecision((v) => (v + 1) % labels.length), 4200)
    return () => clearInterval(timer)
  }, [])
  return <div className="activity-panel float-in">
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div><span className="micro-label">LIVE CONTROL PATH</span><h2 className="mt-1 text-sm font-semibold text-[#e8efed]">One clear view of agent activity</h2></div>
      <span className="live-pill"><i /> Connected</span>
    </div>
    <div className="activity-flow">
      <div className="grid gap-2.5">
        <div className="flow-card anim-delay-1"><span className="micro-label">01 · AI AGENT</span><strong>Research assistant</strong><small>Production · owned</small></div>
        <div className="flow-card"><span className="micro-label">02 · REQUESTED ACTION</span><strong>refund.create</strong><small>Write action · $640</small></div>
      </div>
      <div className="control-orbit"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-center"><span>◇</span><small>CYDRASHIELD</small></div><i className="orbit-dot dot-a"/><i className="orbit-dot dot-b"/></div>
      <div className="grid gap-2.5">
        <div className="flow-card"><span className="micro-label">03 · POLICY CHECK</span><strong>{labels[decision]}</strong><small>Above configured limit</small></div>
        <div className="flow-card flow-card-active"><span className="micro-label">04 · HUMAN DECISION</span><strong>{decision === 0 ? 'Awaiting review' : decision === 1 ? 'Held from execution' : 'Single use approval'}</strong><small>{decision === 2 ? 'Request can proceed' : 'Action held until decided'}</small></div>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
      <div className="flex items-center gap-2.5 text-xs text-[#d1dcda]"><span className="check-stamp"><Check size={12} /></span><span>Request evaluated<small className="mt-1 block text-[10px] text-[#819092]">Identity · action · policy · evidence</small></span></div>
      <span className="decision-badge">{decision === 2 ? 'Approved · once' : decision === 1 ? 'Denied · recorded' : 'No execution yet'}</span>
    </div>
    <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-wider text-[#718184]"><span>Illustrative product workflow</span><span>Policy v1.8 · hash recorded</span></div>
  </div>
}

function Hero() {
  return <section className="hero-grid-bg overflow-hidden bg-[#101619] text-[#f2f5f3]">
    <div className="site-wrap relative grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-20">
      <div className="relative z-10 reveal">
        <SectionLabel light>A security control plane for AI</SectionLabel>
        <h1 className="hero-title">Make AI activity visible.<br /><span>Keep it in control.</span></h1>
        <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-[#b4c0c0]">CydraShield helps your team see what AI agents can access, understand what they’re doing, and set clear boundaries around what they’re allowed to do.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="button button-cyan" href="#demo">Request a demo <ArrowUpRight size={14} /></a>
          <a className="button button-outline" href="#capabilities">Explore the product <ArrowDown size={14} /></a>
        </div>
        <div className="mt-7 flex items-center gap-2.5 text-[10px] text-[#819092]"><i className="pulse-dot" />For the AI activity you route through CydraShield</div>
      </div>
      <ActivityPanel />
      <div className="col-span-full mt-2 grid grid-cols-2 gap-5 border-t border-white/10 py-6 sm:grid-cols-4 sm:gap-3">
        {[
          ['Know', 'which agents and tools are connected'], ['Understand', 'why an action was allowed or held'],
          ['Control', 'what can happen on routed activity'], ['Show', 'the evidence behind each decision'],
        ].map(([title, text], i) => <div className="proof-item" key={title} style={{ animationDelay: `${i * 100}ms` }}><b>{title}</b><span>{text}</span></div>)}
      </div>
    </div>
  </section>
}

function Problem() {
  const rows = [
    ['AI spreads across teams', 'Agents, models and connected tools appear across environments, often without one shared inventory or clear owner.'],
    ['Permissions hide the real reach', 'One agent may have access to information and actions that are hard to see from its chat interface alone.'],
    ['Important actions need context', 'When an agent is about to send data or change something, teams need to understand the action before it happens.'],
  ]
  return <section id="why" className="section-pad bg-white">
    <div className="site-wrap"><div className="section-heading reveal"><div><SectionLabel>01 / The visibility gap</SectionLabel><h2>AI moves quickly.<br />Oversight needs to keep up.</h2></div><p>Agents can connect models, business data and tools in a single workflow. Without a clear view of those connections, teams can struggle to tell what exists, what it can do, and when an action needs a closer look.</p></div>
      <div className="divide-y divide-[#dce2e0] border-y border-[#dce2e0]">{rows.map(([title, text], i) => <article className="problem-row reveal" key={title}><span className="font-mono text-[10px] text-[#829093]">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="mt-10 flex flex-col justify-between gap-3 border-l-2 border-[#5ab5bd] bg-[#eef4f3] px-6 py-5 sm:flex-row sm:items-center"><b className="text-sm">Bring agent activity into view.</b><span className="max-w-[570px] text-xs leading-5 text-[#667478]">CydraShield connects what you know about your agents with what they try to do—then helps apply the right control at the right moment.</span></div>
    </div>
  </section>
}

function ControlLayer() {
  const endpoints = [
    ['◇', 'AI agents', 'Identity · owner · environment'], ['⌘', 'Requests', 'Model prompts · tool actions'],
    ['◎', 'Models', 'Approved inference endpoints'], ['▤', 'Tools & data', 'MCP servers · business systems'],
  ]
  return <section className="section-pad bg-[#101619] text-[#eff3f1]" id="control">
    <div className="site-wrap"><div className="section-heading reveal"><div><SectionLabel light>02 / The CydraShield control layer</SectionLabel><h2>A clear boundary between an agent and its actions.</h2></div><p>Route selected model and tool activity through CydraShield. It checks the identity, requested action and your policy before activity reaches its destination.</p></div>
      <div className="layer-diagram reveal">
        <div className="grid gap-3">{endpoints.slice(0, 2).map(([icon, title, sub], i) => <Endpoint key={title} icon={icon} title={title} sub={sub} arrow="→" delay={i * 120} />)}</div>
        <div className="flex flex-col items-center"><div className="layer-core"><span>◇</span><b>CydraShield</b><small>CHECK · DECIDE · RECORD</small></div><span className="mt-3 font-mono text-[8px] uppercase text-[#a2c7ca]">Policy &amp; inspection</span></div>
        <div className="grid gap-3">{endpoints.slice(2).map(([icon, title, sub], i) => <Endpoint key={title} icon={icon} title={title} sub={sub} arrow="↗" delay={(i + 2) * 120} />)}</div>
      </div>
      <div className="mt-4 grid border border-[#354247] md:grid-cols-3">{[['See the request', 'Link activity to an agent, identity, target and policy.'], ['Apply your rules', 'Allow, deny or hold for human approval where configured.'], ['Keep the record', 'Capture the decision and its context for later review.']].map(([h, p]) => <div className="border-b border-[#354247] p-5 last:border-0 md:border-b-0 md:border-r" key={h}><b className="font-mono text-[9px] uppercase text-[#83c6cc]">{h}</b><p className="mt-2 text-[11px] leading-5 text-[#a5b1b3]">{p}</p></div>)}</div>
    </div>
  </section>
}

function Endpoint({ icon, title, sub, arrow, delay }) {
  return <div className="endpoint-card" style={{ animationDelay: `${delay}ms` }}><div className="flex items-center gap-3"><span className="endpoint-icon">{icon}</span><span><b>{title}</b><small>{sub}</small></span></div><ArrowRight className="text-[#77b7bd]" size={16} /></div>
}

function Capabilities() {
  const items = [
    [<Network size={16} />, 'Understand changing risk', 'See a human-readable posture score with the factors and evidence behind it.'],
    [<ScanEye size={16} />, 'Check activity in context', 'Inspect configured requests for signals such as exposed secrets or instruction overrides.'],
    [<FileCheck2 size={16} />, 'Keep a decision trail', 'Review what was requested, which policy applied, and what happened next.'],
  ]
  return <section id="capabilities" className="section-pad bg-[#e9eeed]">
    <div className="site-wrap"><div className="section-heading reveal"><div><SectionLabel>03 / What it helps you control</SectionLabel><h2>From discovery to a decision you can explain.</h2></div><p>CydraShield brings the essentials together: know what’s connected, understand the risk, and set boundaries around activity that matters.</p></div>
      <div className="grid overflow-hidden border border-[#d3dcda] md:grid-cols-[1.1fr_.9fr]">
        <article className="cap-feature reveal"><span className="micro-label text-[#709399]">01 / INVENTORY &amp; DISCOVERY</span><h3>Know what’s connected to your AI.</h3><p>Build a view of agents, models, tools, permissions and accountable owners. See how the pieces relate as your environment changes.</p><div className="inventory-art" aria-hidden="true"><i /><i /><i /><i /></div></article>
        <div className="grid">{items.map(([icon, title, text], i) => <article className="cap-row reveal" style={{ animationDelay: `${i * 80}ms` }} key={title}><span className="cap-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={16} className="text-[#5c9298]" /></article>)}</div>
        <div className="col-span-full flex items-center justify-between border-t border-[#d3dcda] bg-[#f3f5f4] px-6 py-5 font-mono text-[9px] uppercase text-[#758184]"><span>A focused foundation for AI security</span><a className="flex items-center gap-2 text-[#276f79]" href="#how">See how it works <ArrowRight size={13} /></a></div>
      </div>
    </div>
  </section>
}

function HowItWorks() {
  const steps = [
    ['Discover', 'Register an agent or connect an approved source to build an inventory of models, tools and permissions.', 'Asset & owner'],
    ['Inspect', 'For routed requests, check the agent identity and configured prompt or action fields for relevant signals.', 'Identity & request'],
    ['Decide', 'Apply your versioned policy: allow, deny, or hold a higher-impact action for approval.', 'Policy outcome'],
    ['Record', 'Link the outcome to its request, policy version and evidence so teams can review it later.', 'Decision evidence'],
  ]
  return <section className="section-pad bg-[#171f23] text-[#eff3f1]" id="how">
    <div className="site-wrap"><div className="section-heading reveal"><div><SectionLabel light>04 / How it works</SectionLabel><h2>Each action follows a deliberate path.</h2></div><p>A compact check happens before controlled activity moves forward. Deeper analysis and posture updates continue in the background.</p></div>
      <div className="steps-line">{steps.map(([title, text, tag], i) => <article className="step-card reveal" style={{ animationDelay: `${i * 110}ms` }} key={title}><span className="font-mono text-[9px] text-[#84c2c7]">STEP 0{i + 1}</span><h3>{title}</h3><p>{text}</p><span className="step-tag">{tag}</span></article>)}</div>
      <div className="mt-11 flex gap-3 border border-[#3c494d] p-4 text-[10px] leading-5 text-[#a6b0b1]"><Shield size={15} className="mt-0.5 shrink-0 text-[#83c6cc]" /><span><b className="text-[#dbe3e1]">Designed for clear boundaries.</b> CydraShield can enforce decisions on activity routed through its gateway or SDK check. Activity that bypasses those controlled paths may be visible through later telemetry, but this PoC cannot reliably block it.</span></div>
    </div>
  </section>
}

function Risk() {
  const factors = [['Privileged tool access', 72, '+15'], ['Recent injection signals', 54, '+8'], ['Unverified tool connection', 43, '+6'], ['Verified approval controls', 65, '−9']]
  return <section className="section-pad bg-white" id="risk"><div className="site-wrap grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
    <div className="reveal"><SectionLabel>05 / Security intelligence</SectionLabel><h2>See why risk changes.</h2><p className="mt-5 text-[13px] leading-6 text-[#697679]">CydraShield’s Agent Risk Score is an explainable view of exposure and recent signals—not a mystery number. Review the contributing factors, evidence and control credits to see where attention may help.</p><p className="mt-3 text-[13px] leading-6 text-[#697679]">Configured detectors can flag patterns such as exposed credentials or prompt-injection indicators in selected activity.</p><a className="button button-dark mt-5" href="#demo">Discuss your environment <ArrowUpRight size={14} /></a></div>
    <div className="risk-card reveal"><div className="flex items-start justify-between border-b border-[#e1e6e4] pb-4"><div><span className="micro-label text-[#738285]">AGENT POSTURE · PRODUCTION</span><h3 className="mt-1 text-sm font-semibold">Research assistant</h3></div><div className="flex items-baseline gap-1"><b className="text-3xl tracking-[-.07em]">59</b><small className="font-mono text-[8px] text-[#758386]">/ 100</small><em className="ml-2 font-mono text-[8px] not-italic text-[#b1843a]">HIGH</em></div></div>
      {factors.map(([name, width, score], i) => <div className="risk-factor" key={name}><span>{name}</span><span className="h-[3px] bg-[#e5eae9]"><i className={i === 3 ? 'bg-[#75ad8e]' : 'bg-[#609ca2]'} style={{ width: `${width}%` }} /></span><b>{score}</b></div>)}
      <p className="mt-3 text-[8px] leading-4 text-[#849092]">Illustrative score view. A real score depends on configured factors, evidence and scoring rules.</p>
    </div>
  </div></section>
}

function Approval() {
  return <section className="section-pad bg-[#ebf0ef]" id="human"><div className="site-wrap grid items-center gap-12 lg:grid-cols-2">
    <div className="approval-card reveal"><div className="flex items-center justify-between border-b border-[#e0e6e4] pb-4"><b className="text-[11px]">Action approval</b><span className="approval-required">REVIEW REQUIRED</span></div><div className="py-5"><span className="micro-label text-[#879395]">REQUESTED BY · RESEARCH ASSISTANT</span><h3 className="mt-1 text-base font-bold tracking-tight">Create customer refund</h3><div className="mt-4 grid grid-cols-2 gap-3">{[['Target', 'Billing MCP'], ['Environment', 'Production'], ['Amount', '$640.00'], ['Policy reason', 'Above $500 limit']].map(([k, v]) => <div className="bg-[#f1f4f3] p-3" key={k}><small className="micro-label text-[#849092]">{k}</small><b className="mt-1 block text-[9px]">{v}</b></div>)}</div><div className="mt-3 border border-[#e2e7e5] p-3 font-mono text-[8px] text-[#596668]">customer: <span className="text-[#25808c]">cus_•••82a</span> · amount: <span className="text-[#25808c]">640.00</span></div><div className="mt-4 grid grid-cols-2 gap-2"><button className="approve-btn">Deny request</button><button className="approve-btn approve-dark">Approve once <ArrowRight size={12} /></button></div></div></div>
    <div className="reveal"><SectionLabel>06 / Enforcement &amp; human control</SectionLabel><h2>Keep people in the loop when it matters.</h2><p className="mt-5 text-[13px] leading-6 text-[#677578]">Set a policy to pause a privileged action until an authorized person reviews what the agent intends to do. Approval is tied to the specific request, so a changed action needs a fresh decision.</p><ul className="mt-6 grid gap-3 text-[11px] leading-5 text-[#576467]">{['Show a human-readable action, target and redacted context.', 'Require an authorized approver; add a second reviewer for critical actions.', 'Suspend an agent’s routed activity when an operator needs to contain it.'].map((item) => <li className="flex gap-3" key={item}><span className="check-outline"><Check size={10} /></span>{item}</li>)}</ul></div>
  </div></section>
}

function Evidence() {
  const rows = [['Request identity verified', 'AGENT · research-assistant · 10:42:08', 'PASS'], ['Policy held privileged action', 'POLICY · prod-write-approval · v1.8', 'HOLD'], ['Human approval recorded', 'APPROVER · reviewer-02 · 10:43:31', 'ALLOW'], ['Target response linked', 'TOOL · billing-mcp · 10:43:32', 'DONE']]
  return <section className="section-pad bg-[#101619] text-[#f0f4f2]"><div className="site-wrap grid items-center gap-12 lg:grid-cols-2"><div className="reveal"><SectionLabel light>07 / Evidence &amp; visibility</SectionLabel><h2>Every decision leaves a trail.</h2><p className="mt-5 text-[13px] leading-6 text-[#a6b2b3]">Security teams need to understand what happened and why. CydraShield links each controlled decision to its agent, policy version and request evidence, with sensitive content redacted by default.</p><div className="mt-7 grid gap-3">{['Search decisions and findings in one place', 'Review approval and containment history', 'Export verifiable evidence for audit workflows'].map((v) => <div key={v} className="flex items-center gap-3 text-[10px] text-[#c5d0cf]"><Check size={13} className="text-[#75d0d8]" />{v}</div>)}</div></div>
    <div className="ledger-card reveal"><div className="flex justify-between border-b border-white/10 pb-4 font-mono text-[8px] uppercase text-[#94a5a6]"><span>Decision record</span><span>Verified sequence · 03</span></div>{rows.map(([title, sub, status], i) => <div className="ledger-row" style={{ animationDelay: `${i * 130}ms` }} key={title}><span className="ledger-check"><Check size={11} /></span><div><b>{title}</b><small>{sub}</small></div><em>{status}</em></div>)}<div className="mt-2 overflow-hidden whitespace-nowrap bg-[#202b2f] p-3 font-mono text-[7px] text-[#809497]">REQUEST HASH · 7e90c1…a42f &nbsp; / &nbsp; EVIDENCE SEQUENCE COMPLETE</div></div>
  </div></section>
}

function UseCases() {
  const items = [
    [<Eye size={15} />, 'SECURITY LEADERS', 'Where are we exposed?', 'See which agents are active, who owns them, and where risk or policy gaps deserve attention.', 'Posture & oversight'],
    [<Network size={15} />, 'PLATFORM & AI TEAMS', 'What can this agent do?', 'Map model and tool connections, permissions and activity without losing sight of delivery.', 'Inventory & integrations'],
    [<Fingerprint size={15} />, 'SECURITY ENGINEERS', 'Why was this action held?', 'Trace a request from identity to policy decision, human review and final outcome.', 'Enforcement & evidence'],
  ]
  return <section className="section-pad bg-[#f3f5f4]" id="use-cases"><div className="site-wrap"><div className="section-heading reveal"><div><SectionLabel>08 / Designed for the people responsible</SectionLabel><h2>One shared view.<br />Different questions answered.</h2></div><p>CydraShield gives technical teams and decision-makers a common place to understand agent access, activity and control.</p></div><div className="grid border-y border-[#d9e0de] md:grid-cols-3">{items.map(([icon, role, title, text, tag]) => <article className="usecase-card reveal" key={role}><span className="usecase-icon">{icon}</span><span className="mt-5 block font-mono text-[8px] uppercase text-[#65878c]">{role}</span><h3>{title}</h3><p>{text}</p><span className="mt-5 flex items-center gap-2 font-mono text-[8px] uppercase text-[#517f84]">{tag}<ArrowUpRight size={11} /></span></article>)}</div></div></section>
}

function DemoModal({ onClose }) {
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()} role="presentation"><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="absolute right-4 top-4 p-1" onClick={onClose} aria-label="Close"><X size={19} /></button><SectionLabel>REQUEST A DEMO</SectionLabel><h2 id="modal-title" className="mt-4 text-3xl">Let’s talk about your AI environment.</h2><p className="mt-3 text-xs leading-5 text-[#657276]">Share a few details about your agents, tools and security goals.</p><form className="mt-5 grid gap-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}><input required placeholder="Your name" aria-label="Your name" /><input required type="email" placeholder="Work email" aria-label="Work email" /><input placeholder="Company" aria-label="Company" /><textarea placeholder="What are you looking to secure? (optional)" aria-label="Message" /><button className="button button-dark mt-1 w-full justify-center" type="submit">Prepare demo request <ArrowUpRight size={14} /></button></form><p className="mt-3 text-[9px] leading-4 text-[#768285]">Prototype only: requests are not sent or stored until a contact inbox or form service is connected.</p></div></div>
}

function Footer({ onDemo }) {
  return <><section id="demo" className="bg-[#dce5e3] py-20"><div className="site-wrap flex flex-col justify-between gap-8 md:flex-row md:items-center"><div className="max-w-2xl"><SectionLabel>NEXT / Start a conversation</SectionLabel><h2 className="mt-4">Bring your AI activity into view.</h2><p className="mt-4 max-w-xl text-xs leading-5 text-[#667477]">See how CydraShield could fit your agents, tools and security workflows. Talk with our team about your environment and what you need to control.</p></div><button className="button button-dark" onClick={onDemo}>Request a demo <ArrowUpRight size={14} /></button></div></section>
  <footer className="bg-[#101619] py-10 text-[#edf1ef]"><div className="site-wrap"><div className="flex flex-col justify-between gap-9 border-b border-white/10 pb-9 sm:flex-row"><div><Brand /><p className="mt-4 max-w-[250px] text-[10px] leading-5 text-[#8b999b]">Visibility and control for AI agent activity.</p></div><div className="flex gap-14"><div><b className="micro-label">EXPLORE</b>{[['Control layer', '#control'], ['Capabilities', '#capabilities'], ['How it works', '#how']].map(([name, href]) => <a className="footer-link" href={href} key={name}>{name}</a>)}</div><div><b className="micro-label">CONNECT</b><button className="footer-link" onClick={onDemo}>Request a demo</button></div></div></div><div className="flex justify-between gap-4 pt-5 font-mono text-[8px] uppercase text-[#758386]"><span>© 2026 CydraLabs · CydraShield</span><span>Security through visibility and control</span></div></div></footer></>
}

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setDemoOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return <><Header /><main id="top"><Hero /><Problem /><ControlLayer /><Capabilities /><HowItWorks /><Risk /><Approval /><Evidence /><UseCases /></main><Footer onDemo={() => setDemoOpen(true)} />{demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}</>
}
