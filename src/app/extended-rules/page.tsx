import type { Metadata } from "next";
import { Note } from "@/components/Note";
import { FaqHero } from "@/components/FaqHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { ExternalLink } from "@/components/ExternalLink";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.extendedRules,
  path: "/extended-rules",
});

export default function ExtendedRules() {
  return (
    <>
      <FaqHero page="extendedRules" />

      <Note className="mb-6">
        By participating in the Operation Throwback Discord server, you agree to
        follow these rules at all times.
      </Note>

      <SectionTitle>§1 Chatting</SectionTitle>
      <Prose>
        <h3>1. Language</h3>
        <p>
          This is an English-speaking server. To keep the community as engaged
          as possible, keep the use of other languages to an absolute minimum.
        </p>

        <h3>2. Spamming</h3>
        <p>
          Spamming creates an obnoxious environment for our members. If you
          spam, your messages will be deleted and you will be punished.
        </p>

        <h3>3. Treatment</h3>
        <p>
          Treat others professionally and with respect. We are a community where
          we are kind and helpful to each other, not toxic. Any kind of toxic
          behavior is punishable.
        </p>

        <h3>4. Hate Speech</h3>
        <p>
          Promoting, coordinating, or engaging in any form of hate speech is
          strictly prohibited. The following characteristics are protected under
          the Discord Community Guidelines.
        </p>
        <ul>
          <li>Age</li>
          <li>Caste</li>
          <li>Color, race, ethnicity, or national origin</li>
          <li>Disability or serious illness</li>
          <li>Family responsibilities</li>
          <li>Gender or gender identity</li>
          <li>Housing status</li>
          <li>Refugee or immigration status</li>
          <li>Religious affiliation</li>
          <li>Sex or sexual orientation</li>
          <li>Socioeconomic class and status</li>
          <li>Source of income</li>
          <li>
            Status as a victim of domestic violence, sexual violence, or
            stalking
          </li>
          <li>Weight and size</li>
        </ul>

        <h3>5. Harassment</h3>
        <p>
          Promoting, coordinating, or engaging in any form of harassment is
          strictly prohibited. This includes, but is not limited to, physical,
          psychological, and sexual abuse, server raiding, and ban or block
          evasion.
        </p>
        <Note variant="error" className="my-3">
          Harassment is a very serious offense and will be taken as such by our
          staff.
        </Note>

        <h3>6. Personal Information</h3>
        <p>
          Sharing the personal information of a non-consenting individual —
          otherwise known as doxxing — is strictly prohibited. This includes,
          but is not limited to, the following.
        </p>
        <ul>
          <li>Names — first, middle, last, or any other identifying name</li>
          <li>Age</li>
          <li>
            Addresses — home, work, school, or any other location where the
            individual can commonly be found
          </li>
          <li>
            Identifying numbers — social security, insurance, or personal
            identification numbers
          </li>
          <li>
            Bank account information — bank names, account numbers, balances, or
            any other private banking details
          </li>
          <li>
            Family information — names, ages, or any other sensitive information
            of family members
          </li>
          <li>
            Images — of the individual, their sensitive locations, family
            members, documents such as passports, or anything else related to
            their private life
          </li>
        </ul>
        <p>
          Sharing any of the above, or any other sensitive information about an
          individual without their consent, will result in your messages being
          deleted and you being punished accordingly.
        </p>
      </Prose>

      <SectionTitle>§2 Media</SectionTitle>
      <Prose>
        <h3>1. Sexually Explicit Content</h3>
        <p>
          Do not distribute or share any sexual content in the server. This
          applies to both text channels and voice channel streams. It includes,
          but is not limited to, nudity, intercourse, inappropriate touching,
          ahegao, exhibition, bondage, and other sexual actions.
        </p>

        <h3>2. Carnography</h3>
        <p>
          Do not distribute or share any carnography — commonly known as gore —
          in the server. This applies to both text channels and voice channel
          streams. It includes, but is not limited to, severe injuries,
          excessive amounts of blood, shootings, terrorism, abuse, torture, and
          any other type of extreme violence.
        </p>

        <h3>3. Cheating</h3>
        <p>
          Do not distribute or share any content relating in any way, shape, or
          form to cheating in R6S. This includes, but is not limited to,
          BattlEye bypasses, cheat source code, and other related content.
        </p>
      </Prose>

      <SectionTitle>§3 Final Verdict</SectionTitle>
      <Prose>
        <p>
          Our staff has final verdict. <strong>If you are told to stop</strong>{" "}
          doing something by our staff, <strong>you stop</strong> — and we
          reserve the right to take action if you do not.
        </p>
        <p>
          If you believe staff have taken an action that was unjustified, you
          may make a complaint to the server owner.
        </p>
        <Note variant="error" className="my-3">
          Any action taken by our staff is not up for debate. Complaining openly
          or repeatedly will get you nowhere.
        </Note>

        <h3>What to Include in a Complaint</h3>
        <p>When submitting a complaint, provide the following details.</p>
        <ul>
          <li>The name of the staff member involved</li>
          <li>
            The action that staff member took that you felt was unjustified
          </li>
          <li>Why you found the action unjustified</li>
        </ul>
        <p>
          Once you have done so, the server owner will investigate your
          complaint and get back to you. Their response is final — you may ask
          questions about it, but <strong>arguing will get you nowhere</strong>.
        </p>
        <Note className="my-3">
          Most of our internal affairs happen out of your sight. This does not
          mean nothing is happening — please be patient.
        </Note>
      </Prose>

      <SectionTitle>§4 Discord Guidelines & Terms of Service</SectionTitle>
      <Prose>
        <p>
          Follow the Discord Community Guidelines and Terms of Service, as those
          apply to this server as well. You can find them here.
        </p>
        <ul>
          <li>
            <ExternalLink href="https://discord.com/guidelines">
              Community Guidelines
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com/terms">
              Terms of Service
            </ExternalLink>
          </li>
        </ul>
      </Prose>
    </>
  );
}
