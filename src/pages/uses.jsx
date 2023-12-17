import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Tools - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, love and recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, love and recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          {/* <ToolsSection title="Workstation">
            <Tool title="13.6” MacBook, M2 Air, 8GB RAM (2022)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection> */}
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma, the bread and butter of my life. It's been ages since I
              have been using Figma and I still can't imagine using any other
              design tool out there. I love how Figma team always listen to
              their community feedback and keep iterating on new features.
            </Tool>
            <Tool title="Protopie">
              Even though Figma allows me to create quick prototypes in the tool
              itself, it's just not enough sometimes. Protopie allows me to make
              complex animations and prototypes in a span of time which makes
              the developers life easier to comprehend them and build those
              complexities in real life.
            </Tool>
            <Tool title="FigJam">
              I started using FigJam as just a scribbling tool but now it has
              become my virtual whiteboard for the entire time. Never would have
              expected it's collaboration features to be the real hook.
            </Tool>
            <Tool title="Tally Forms">
              I randomly came across this tool but its safe to say it is one of
              the best form tool out there with custom logics, great design and
              affordable pricing. List goes on with this tool!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development">
            <Tool title="Visual Studio Code">
              I use Visual studio code, the OG IDE of all time. It's user
              friendly interface and seamless integration with Figma helps me to
              work on a ton of Frontend projects.
            </Tool>
            <Tool title="Webflow">
              Hard coding every website from scratch costs a lot of time, money
              and resources. Which is why I chose to use visual development tool
              like Webflow to fasten up the process and build complex animations
              which are not easy to implement.
            </Tool>
            <Tool title="Framer">
              Relatively newer tool and a lot cheaper then webflow. It's easy to
              use interface and AI tool suite gives it an edge over webflow
              which is why it's gaining popularity quickly.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Trello">
              It’s not the newest or the fanciest kid on the block but it’s still one of the most efficient project management tool for me.
              Easy to onboard clients and manage their ongoing requests.
            </Tool>
            <Tool title="Notion">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Notion, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="Apple Notes">
              Simple tool for taking quick notes when I need to just do the work
              and get some momentum going.
            </Tool>
            <Tool title="Cal.com">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
