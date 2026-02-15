#!/usr/bin/env node
const https = require("https");
const http = require("http");
// lightweight XML parsing using regex to avoid extra dependencies

const base = process.env.BASE_URL || "http://localhost:3000";

function fetch(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      })
      .on("error", reject);
  });
}

async function run() {
  console.log("Base URL:", base);

  try {
    const robotsUrl = `${base.replace(/\/$/, "")}/robots.txt`;
    const robots = await fetch(robotsUrl);
    console.log("robots.txt:", robots.status);

    const sitemapUrl = `${base.replace(/\/$/, "")}/sitemap.xml`;
    const sitemapRes = await fetch(sitemapUrl);
    console.log("sitemap.xml:", sitemapRes.status);

    if (sitemapRes.status !== 200) {
      console.error(
        "Cannot fetch sitemap.xml; make sure the dev server is running and the route exists.",
      );
      process.exit(1);
    }

    // extract all <loc> values from sitemap XML
    const locMatches = [...sitemapRes.body.matchAll(/<loc>(.*?)<\/loc>/g)];
    const urls = locMatches.map((m) => m[1]);
    console.log(`Found ${urls.length} URLs in sitemap.`);

    for (const url of urls) {
      try {
        const res = await fetch(url);
        console.log(`${url} -> ${res.status}`);
      } catch (err) {
        console.log(`${url} -> error (${err.message})`);
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

run();
