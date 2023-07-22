import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href={"/"} key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-auto flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src={"/logof.png"}
            width={115}
            height={40}
            alt="KipDEV"
            className="h-[40px] w-[115px]"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            At KipDEV, we specialize in crafting stunning web solutions that
            elevate your online presence to new heights. As a dedicated
            freelance web developer, I bring a wealth of expertise to the table,
            ensuring your website is not only visually captivating but also
            optimized to rank prominently on search engines.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright border-t-[1px] border-gray-50 pt-4">
        <p className="text-gray-400">@ {year} KipDEV. All rights reserved.</p>
        <p className="text-gray">
          <span className="font-semibold text-gray-100">100</span> Articles
        </p>
      </div>
    </footer>
  );
};

export default Footer;
