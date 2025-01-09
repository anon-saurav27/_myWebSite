import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-purple-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Saurav's
              </span>
              Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="General" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  About Me
                </Footer.Link>
                <Footer.Link
                  href="/projects"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Featured Projects
                </Footer.Link>
                <Footer.Link
                  href="/blogs"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Blogs
                </Footer.Link>
                <Footer.Link
                  href="/contact"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Me " />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/anon-saurav27"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.facebook.com/saurav.130.giri"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/saurav-giri-3b3a62288/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Linked In
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/saurav-giri-3b3a62288/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Email
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Saurav Giri"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/saurav.130.giri" target="blank" rel="noopener noreferrer" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/sauravgiri_27/" target="blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/anon-saurav27" target="blank" rel="noopener noreferrer" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/saurav-giri-3b3a62288/" target="blank" rel="noopener noreferrer" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
