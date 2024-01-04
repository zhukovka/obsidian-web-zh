import TurndownService from "turndown";

import { ExtensionLocalSettings, ExtensionSyncSettings } from "./types";

export const MinVersion = "1.3.1";

export const DefaultContentTemplate =
  '---\npage-title: {{json page.title}}\nurl: {{page.url}}\ndate: "{{date}}"\n---\n{{#if page.selectedText}}\n\n{{quote page.selectedText}}\n{{/if}}';
export const DefaultUrlTemplate = "/vault/{{filename page.title}}.md";
export const DefaultHeaders = {};
export const DefaultMethod = "put";

export const DefaultLocalSettings: ExtensionLocalSettings = {
  version: "0.1",
  insecureMode: false,
  apiKey: "",
};

export const DefaultSyncSettings: ExtensionSyncSettings = {
  version: "0.1",
  presets: [
    {
      name: "Create new note",
      urlTemplate: DefaultUrlTemplate,
      contentTemplate: DefaultContentTemplate,
      headers: DefaultHeaders,
      method: DefaultMethod,
    },
    {
      name: "Append to existing note",
      urlTemplate: "/active/",
      contentTemplate:
          "## {{json page.title}} [link]({{page.url}})\n {{date}}\n{{#if page.selectedText}}\n\n{{quote page.selectedText}}\n{{/if}}\n{{#if page.metaTags}}\n\n{{page.metaTags}}\n{{/if}}",
      headers: {},
      method: "post",
    },
    {
      name: "Append Jira ticket to existing note",
      urlTemplate: "/active/",
      contentTemplate:
          "## {{json page.title}} [link]({{page.url}})\n {{date}}\n{{#if page.selectedText}}\n\n{{quote page.selectedText}}\n{{/if}}\n{{#if page.jira}}\n\n{{page.jira}}\n{{/if}}",
      headers: {},
      method: "post",
    },
    {
      name: "Append to current daily note",
      urlTemplate: "/periodic/daily/",
      contentTemplate:
          "## {{page.title}}\nURL: {{page.url}}\n{{#if page.selectedText}}\n\n{{quote page.selectedText}}\n{{/if}}",
      headers: {},
      method: "post",
    },
    {
      name: "Capture page snapshot",
      urlTemplate: DefaultUrlTemplate,
      contentTemplate:
        '---\npage-title: {{json page.title}}\nurl: {{page.url}}\ndate: "{{date}}"\n---\n{{#if page.selectedText}}\n\n{{quote page.selectedText}}\n\n---\n\n{{/if}}{{page.content}}',
      headers: DefaultHeaders,
      method: DefaultMethod,
    },
  ],
  searchEnabled: false,
  searchBackgroundEnabled: false,
  searchMatchMentionTemplate: "",
  searchMatchDirectTemplate: "Append to existing note",
};

export const TurndownConfiguration: TurndownService.Options = {
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
};
