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

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of my favorite stuff. But this is not all, I am always looking for new things to try and improve my workflow."
    >
      <div className="space-y-20">
        <ToolsSection title="Languages">
          <Tool title="JavaScript">
            I&apos;ve been writing JavaScript for over 5 years and I still love it.
          </Tool>
          <Tool title="TypeScript">
            I&apos;ve been using TypeScript for about 3 years and it takes a loosely typed language like javascript and makes it feel like a strongly typed language.
          </Tool>
          <Tool title="Python">
            Python is my go-to language for anything that isn&apos;t a web app. I love it.
          </Tool>
          <Tool title="PHP">
            This is the language I learned to code with and I still use it for a lot of things.
          </Tool>
          </ToolsSection>
        <ToolsSection title="Frameworks">
          <Tool title="React">
            Changed the game for front-end development. I love it.
          </Tool>
          <Tool title="Next.js">
            The best way to build a React app. Highly configurable and easy to use.
          </Tool>
          <Tool title="Django">
            Oh Django!
          </Tool>
          <Tool title="Laravel">
            Battle tested and still the best PHP framework.
          </Tool>
        </ToolsSection>
       <ToolsSection title="Database">
          <Tool title="PostgreSQL">
            Great relational database with the ability to work with both XML and JSON.
          </Tool>
          <Tool title="MySql">
            This is the database I learned to code with and I still use it for a lot of things.
          </Tool>
          <Tool title="Prisma">
            A great ORM for working with databases in a Node.js app.
          </Tool>
          <Tool title="Firebase">
            If you're ever looking for a real-time non-relational database, this is the one.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud">
          <Tool title="Vercel">
            One of the easiest ways to deploy a website. I use it for all of my personal projects.
          </Tool>
          <Tool title="AWS">
            AWS is a vast ecosystem and I&apos;ve only scratched the surface but I love it.
          </Tool>
          <Tool title="GCP">
            I use it rarely but it&apos;s great for hosting and managing projects.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M3, 8GB RAM (2023)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I&apos;ve never heard the fans turn on a
            single time. I also have a mac mini M1 which I use for my personal projects.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            I&apos;ve tried a lot of keyboards and I always come back to
            this one. It&apos;s just the best.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Warp">
            The best AI powered terminal I&apos;ve ever used. 
          </Tool>
          <Tool title="VS Code">
            I&apos;ve tried a lot of editors and always come back to this one.
            It&apos;s just the best.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it&apos;s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Trello">
            I&apos;ve tried a lot of project management tools and always come back
            to this one. It&apos;s just the best.
          </Tool>
          <Tool title="Github Projects">
            Great for managing tasks and issues for my open-source projects. I also use this in my current job.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
