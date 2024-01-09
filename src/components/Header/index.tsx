import Link from "next/link";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { LocaleSwitcher } from "../LocaleSwitch";
import { FreeToTry } from "../DownloadBtn";
import { MobileNavigation } from "./MobileNavigation";
import { useTranslations } from "next-intl";

export function Header({ downloadText }: { downloadText?: string }) {
  const t = useTranslations("Common")
  return (
    <header className="py-6 fixed top-0 z-50 bg-white shadow-sm w-full">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">{t("Features")}</NavLink>
              <NavLink href="#datafields">{t("Datafields")}</NavLink>
              <NavLink href="#pricing">{t("Pricing")}</NavLink>
              <NavLink href="#faq">{t("FAQs")}</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <LocaleSwitcher />
            {/* 移动端隐藏 */}
            <div className="hidden md:block">
              <FreeToTry text={downloadText} />
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation>
              </MobileNavigation>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}