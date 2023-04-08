import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./styles.module.scss";
import clsx from "clsx";

export default function Comments(props: { repo: any; issueNumber: any }) {
  const { colorMode } = useColorMode();

  const commentsRef = useRef<HTMLDivElement>();
  const repo = props.repo;
  const issueNumber = props.issueNumber;
  const theme = `github-${colorMode}`;

  const scriptEl = document.createElement("script");
  scriptEl.src = "https://utteranc.es/client.js";
  scriptEl.async = true;
  scriptEl.setAttribute("repo", repo);
  scriptEl.setAttribute("theme", theme);
  scriptEl.setAttribute("issue-number", issueNumber);
  scriptEl.setAttribute("crossorigin", "anonymous");

  useEffect(() => {
    if (commentsRef.current) {
      commentsRef.current.innerHTML = "";
      commentsRef.current.appendChild(scriptEl);
    }
  }, [theme]);

  return <div className={clsx('shadow--lw','margin-top--md')} ref={commentsRef}></div>;
}
