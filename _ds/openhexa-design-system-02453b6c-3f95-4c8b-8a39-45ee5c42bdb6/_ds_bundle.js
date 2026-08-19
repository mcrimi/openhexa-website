/* @ds-bundle: {"format":4,"namespace":"OpenHEXADesignSystem_02453b","components":[],"sourceHashes":{"ui_kits/app/App.jsx":"7b75346206d5","ui_kits/app/Datasets.jsx":"f05a58e80c3b","ui_kits/app/Header.jsx":"a3022d4cc31b","ui_kits/app/Home.jsx":"adfc1a83fd9b","ui_kits/app/Icons.jsx":"004c5133f82d","ui_kits/app/Login.jsx":"7e0417f8689b","ui_kits/app/Pipelines.jsx":"2cbbefc6920f","ui_kits/app/Primitives.jsx":"655d31b6720c","ui_kits/app/Sidebar.jsx":"b28f76c3d76c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpenHEXADesignSystem_02453b = window.OpenHEXADesignSystem_02453b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/App.jsx
try { (() => {
/* global React, ReactDOM, Sidebar, Header, HelpButton, Login, Home, Pipelines, Datasets, Placeholder, Button, Icon, I */

const DEFAULT_WORKSPACE = {
  slug: "burkina-faso-malaria",
  name: "Burkina Faso · Malaria programme"
};
const App = () => {
  const [user, setUser] = React.useState(null); // null = logged out
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [route, setRoute] = React.useState("home");
  const [pipelinesTab, setPipelinesTab] = React.useState("pipelines");

  // Home page editing state lifted so the header can render Cancel/Save.
  const [editingHome, setEditingHome] = React.useState(false);
  const [homeBody, setHomeBody] = React.useState(`# ${DEFAULT_WORKSPACE.name}\n\nThis workspace tracks malaria surveillance and stock data across districts in Burkina Faso, sourced from DHIS2 and IASO. Use it to onboard new analysts, point to the canonical datasets, and link out to dashboards.\n\n## What's here\n\n- **Files** — raw exports, intermediate parquet, and weekly snapshots.\n- **Database** — the workspace warehouse, with tables created by pipelines.\n- **Datasets** — versioned, shareable data products published to partners.\n- **Pipelines** — Python and R workflows that move and transform the data.\n\n> Last refresh: \`2026-04-21 06:00 UTC\`. Pipeline run schedules live in the pipelines tab.`);
  if (!user) return /*#__PURE__*/React.createElement(Login, {
    onLogin: setUser
  });
  const breadcrumbs = (() => {
    switch (route) {
      case "home":
        return [DEFAULT_WORKSPACE.name];
      case "pipelines":
        return [DEFAULT_WORKSPACE.name, pipelinesTab === "templates" ? "Templates" : "Pipelines"];
      case "datasets":
        return [DEFAULT_WORKSPACE.name, "Datasets"];
      case "files":
        return [DEFAULT_WORKSPACE.name, "Files"];
      case "database":
        return [DEFAULT_WORKSPACE.name, "Database"];
      case "connections":
        return [DEFAULT_WORKSPACE.name, "Connections"];
      case "notebooks":
        return [DEFAULT_WORKSPACE.name, "JupyterHub"];
      case "apps":
        return [DEFAULT_WORKSPACE.name, "Apps"];
      case "settings":
        return [DEFAULT_WORKSPACE.name, "Settings"];
      default:
        return [DEFAULT_WORKSPACE.name];
    }
  })();
  const actions = (() => {
    if (route === "home") {
      return editingHome ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setEditingHome(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setEditingHome(false)
      }, "Save")) : /*#__PURE__*/React.createElement(Button, {
        onClick: () => setEditingHome(true)
      }, "Edit");
    }
    if (route === "pipelines") {
      return /*#__PURE__*/React.createElement(Button, {
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          d: I.Plus,
          size: 14
        })
      }, "Create");
    }
    if (route === "datasets") {
      return /*#__PURE__*/React.createElement(Button, {
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          d: I.Plus,
          size: 14
        })
      }, "Create a dataset");
    }
    return null;
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "var(--brand-navy)",
      zIndex: 40,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement(Sidebar, {
    workspace: DEFAULT_WORKSPACE,
    current: route,
    onNavigate: id => {
      setRoute(id);
      setEditingHome(false);
    },
    user: user,
    onSignOut: () => setUser(null),
    open: sidebarOpen,
    onToggle: () => setSidebarOpen(v => !v)
  }), /*#__PURE__*/React.createElement(Header, {
    breadcrumbs: breadcrumbs,
    actions: actions,
    sidebarOpen: sidebarOpen
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      paddingLeft: sidebarOpen ? 256 : 64,
      paddingTop: 64,
      minHeight: "100vh",
      background: "#fff",
      transition: "padding-left 75ms var(--ease-standard)"
    }
  }, route === "home" && /*#__PURE__*/React.createElement(Home, {
    workspace: DEFAULT_WORKSPACE,
    editing: editingHome,
    body: homeBody,
    setBody: setHomeBody
  }), route === "pipelines" && /*#__PURE__*/React.createElement(Pipelines, {
    tab: pipelinesTab,
    setTab: setPipelinesTab
  }), route === "datasets" && /*#__PURE__*/React.createElement(Datasets, null), route === "files" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "Files"
  }), route === "database" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "Database"
  }), route === "connections" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "Connections"
  }), route === "notebooks" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "JupyterHub"
  }), route === "apps" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "Apps"
  }), route === "settings" && /*#__PURE__*/React.createElement(Placeholder, {
    label: "Settings"
  })), /*#__PURE__*/React.createElement(HelpButton, null));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Datasets.jsx
try { (() => {
/* global React, Badge, Icon, I */

// A simple data-table / list view that doubles for Datasets, Files, and
// other list-style pages. The OpenHEXA app uses several data grids; this is
// a representative "rows of objects" view.

const SEED_DATASETS = [{
  name: "Burkina Faso · DHIS2 case reports",
  versions: 14,
  owner: "Lena Marchetti",
  updated: "12 min ago",
  tone: "success",
  status: "Published"
}, {
  name: "WHO World Pop denominators (2024)",
  versions: 1,
  owner: "Tomás Mendes",
  updated: "yesterday",
  tone: "neutral",
  status: "Draft"
}, {
  name: "Malaria · district incidence per 1000",
  versions: 8,
  owner: "Rina Boateng",
  updated: "2 days ago",
  tone: "success",
  status: "Published"
}, {
  name: "Stock movements · ANC commodities",
  versions: 3,
  owner: "Ade Kone",
  updated: "last week",
  tone: "warning",
  status: "Stale"
}, {
  name: "Geo · admin level 2 boundaries",
  versions: 2,
  owner: "Olivia Hernández",
  updated: "3 weeks ago",
  tone: "neutral",
  status: "Draft"
}, {
  name: "ANC visit indicators",
  versions: 6,
  owner: "Jordan Park",
  updated: "1 month ago",
  tone: "success",
  status: "Published"
}];
const Datasets = () => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 6,
      boxShadow: "var(--shadow-xs)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 0,
      bottom: 0,
      display: "inline-flex",
      alignItems: "center",
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Search,
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Filter\u2026",
    style: {
      padding: "6px 10px 6px 32px",
      border: "1px solid var(--gray-200)",
      borderRadius: 6,
      background: "var(--gray-50)",
      fontSize: 13,
      width: 220,
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("select", {
    style: {
      padding: "6px 10px",
      border: "1px solid var(--gray-200)",
      borderRadius: 6,
      background: "#fff",
      fontSize: 13,
      color: "var(--gray-700)"
    }
  }, /*#__PURE__*/React.createElement("option", null, "All statuses"), /*#__PURE__*/React.createElement("option", null, "Published"), /*#__PURE__*/React.createElement("option", null, "Draft"), /*#__PURE__*/React.createElement("option", null, "Stale"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-500)"
    }
  }, SEED_DATASETS.length, " datasets")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-50)",
      color: "var(--gray-500)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, /*#__PURE__*/React.createElement(Th, null, "Name"), /*#__PURE__*/React.createElement(Th, null, "Status"), /*#__PURE__*/React.createElement(Th, {
    align: "right"
  }, "Versions"), /*#__PURE__*/React.createElement(Th, null, "Owner"), /*#__PURE__*/React.createElement(Th, null, "Updated"), /*#__PURE__*/React.createElement(Th, null))), /*#__PURE__*/React.createElement("tbody", null, SEED_DATASETS.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: d.name,
    style: {
      borderTop: "1px solid var(--gray-200)",
      cursor: "pointer",
      background: "#fff"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-50)",
    onMouseLeave: e => e.currentTarget.style.background = "#fff"
  }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Datasets,
    size: 18,
    style: {
      color: "var(--gray-400)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-900)",
      fontWeight: 500
    }
  }, d.name))), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status)), /*#__PURE__*/React.createElement(Td, {
    align: "right",
    mono: true
  }, d.versions), /*#__PURE__*/React.createElement(Td, null, d.owner), /*#__PURE__*/React.createElement(Td, null, d.updated), /*#__PURE__*/React.createElement(Td, {
    align: "right"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: 0,
      color: "var(--gray-400)",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Dots,
    size: 18
  })))))))));
};
const Th = ({
  children,
  align = "left"
}) => /*#__PURE__*/React.createElement("th", {
  style: {
    textAlign: align,
    padding: "10px 16px",
    fontWeight: 500
  }
}, children);
const Td = ({
  children,
  align = "left",
  mono = false
}) => /*#__PURE__*/React.createElement("td", {
  style: {
    textAlign: align,
    padding: "12px 16px",
    color: "var(--gray-700)",
    fontFamily: mono ? "var(--font-mono)" : undefined
  }
}, children);

// ─── Placeholder for routes we didn't build out ─────────────────────────
const Placeholder = ({
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  d: I.Inbox,
  size: 48,
  style: {
    color: "var(--gray-400)"
  }
}), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 600,
    color: "var(--gray-900)"
  }
}, label), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    color: "var(--gray-500)",
    maxWidth: 380,
    marginTop: 8,
    lineHeight: 1.5
  }
}, "This section is part of the OpenHEXA app. It's not implemented in this UI-kit mock \u2014 see the codebase for the real screen."));
Object.assign(window, {
  Datasets,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Datasets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Header.jsx
try { (() => {
/* global React, Icon, I */

// ─── Top header (matches WorkspaceLayout.tsx) ────────────────────────────
const Header = ({
  breadcrumbs,
  actions,
  sidebarOpen
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    position: "fixed",
    top: 0,
    right: 0,
    left: sidebarOpen ? 256 : 64,
    height: 64,
    background: "#fff",
    borderBottom: "1px solid var(--gray-200)",
    boxShadow: "var(--shadow-xs)",
    zIndex: 10,
    transition: "left 75ms var(--ease-standard)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "0 24px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 16,
    fontWeight: 500,
    color: "var(--gray-700)"
  }
}, breadcrumbs.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement(Icon, {
  d: I.ChevronRight,
  size: 14,
  style: {
    color: "var(--gray-400)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    color: i === breadcrumbs.length - 1 ? "var(--gray-900)" : "var(--gray-500)"
  }
}, b)))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    maxWidth: 380,
    padding: "0 16px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    left: 10,
    top: 0,
    bottom: 0,
    display: "inline-flex",
    alignItems: "center",
    color: "var(--gray-400)"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  d: I.Search,
  size: 16
})), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search workspace\u2026",
  style: {
    width: "100%",
    padding: "8px 10px 8px 34px",
    border: "1px solid var(--gray-200)",
    borderRadius: 6,
    background: "var(--gray-50)",
    fontSize: 13,
    color: "var(--gray-800)",
    outline: "none"
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8
  }
}, actions)));

// ─── Help floating button ────────────────────────────────────────────────
const HelpButton = () => /*#__PURE__*/React.createElement("button", {
  title: "Help",
  style: {
    position: "fixed",
    bottom: 24,
    right: 24,
    width: 48,
    height: 48,
    borderRadius: 9999,
    background: "#fff",
    border: 0,
    boxShadow: "var(--shadow-xl), 0 0 0 1px rgb(107 114 128 / .05)",
    cursor: "pointer",
    fontSize: 28,
    color: "var(--gray-700)",
    lineHeight: 1,
    zIndex: 30
  }
}, "?");
Object.assign(window, {
  Header,
  HelpButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Home.jsx
try { (() => {
/* global React, Button */

// Home is controlled — `editing` state lives in App so the header can show
// Cancel/Save when editing.
const Home = ({
  workspace,
  editing,
  body,
  setBody
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 40px",
      maxWidth: 980
    }
  }, editing ? /*#__PURE__*/React.createElement("textarea", {
    value: body,
    onChange: e => setBody(e.target.value),
    autoFocus: true,
    style: {
      width: "100%",
      minHeight: 380,
      font: "14px/1.6 var(--font-sans)",
      padding: 18,
      border: "1px solid var(--gray-300)",
      borderRadius: 6,
      color: "var(--gray-800)",
      outline: "none",
      resize: "vertical",
      background: "#fff",
      boxShadow: "var(--shadow-xs)"
    }
  }) : /*#__PURE__*/React.createElement("article", {
    style: {
      background: "#fff",
      borderRadius: 6,
      padding: "24px 32px",
      boxShadow: "var(--shadow-xs)",
      color: "var(--gray-800)"
    }
  }, /*#__PURE__*/React.createElement(MarkdownLite, {
    source: body
  })));
};
const MarkdownLite = ({
  source
}) => {
  const lines = source.split("\n");
  const blocks = [];
  let i = 0;
  const inline = t => t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, '<code style="font-family:var(--font-mono);background:var(--gray-100);padding:1px 5px;border-radius:3px;font-size:.9em">$1</code>');
  while (i < lines.length) {
    const line = lines[i];
    if (/^# /.test(line)) {
      blocks.push(/*#__PURE__*/React.createElement("h1", {
        key: i,
        style: {
          fontSize: 28,
          fontWeight: 700,
          color: "var(--gray-900)",
          margin: "0 0 16px",
          letterSpacing: "-.015em"
        },
        dangerouslySetInnerHTML: {
          __html: inline(line.slice(2))
        }
      }));
      i++;
    } else if (/^## /.test(line)) {
      blocks.push(/*#__PURE__*/React.createElement("h2", {
        key: i,
        style: {
          fontSize: 20,
          fontWeight: 600,
          color: "var(--gray-900)",
          margin: "24px 0 12px"
        },
        dangerouslySetInnerHTML: {
          __html: inline(line.slice(3))
        }
      }));
      i++;
    } else if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(/*#__PURE__*/React.createElement("ul", {
        key: `l${i}`,
        style: {
          margin: "0 0 14px",
          paddingLeft: 22,
          color: "var(--gray-700)",
          lineHeight: 1.7
        }
      }, items.map((it, k) => /*#__PURE__*/React.createElement("li", {
        key: k,
        dangerouslySetInnerHTML: {
          __html: inline(it)
        }
      }))));
    } else if (/^> /.test(line)) {
      blocks.push(/*#__PURE__*/React.createElement("blockquote", {
        key: i,
        style: {
          margin: "12px 0",
          padding: "10px 16px",
          background: "var(--gray-50)",
          borderLeft: "3px solid var(--gray-300)",
          color: "var(--gray-600)",
          borderRadius: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: inline(line.slice(2))
        }
      })));
      i++;
    } else if (line.trim() === "") {
      i++;
    } else {
      blocks.push(/*#__PURE__*/React.createElement("p", {
        key: i,
        style: {
          margin: "0 0 14px",
          color: "var(--gray-700)",
          lineHeight: 1.7
        },
        dangerouslySetInnerHTML: {
          __html: inline(line)
        }
      }));
      i++;
    }
  }
  return /*#__PURE__*/React.createElement("div", null, blocks);
};
Object.assign(window, {
  Home,
  MarkdownLite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icons.jsx
try { (() => {
/* global React */
// Outline Heroicons (24px, stroke 1.5) — recreated by hand using the icon paths
// from @heroicons/react/24/outline. Stroke linecap/linejoin round.

const Icon = ({
  d,
  size = 20,
  className = "",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className,
  style: style,
  "aria-hidden": "true"
}, Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: p
})) : /*#__PURE__*/React.createElement("path", {
  d: d
}));

// Each entry is a 24×24 outline icon. Most are simplified from Heroicons.
const I = {
  Home: "M2.25 12 12 2.25 21.75 12M4.5 9.75v9a1.5 1.5 0 0 0 1.5 1.5h3.75V15h4.5v5.25H18a1.5 1.5 0 0 0 1.5-1.5v-9",
  Folder: "M3.75 9.75h16.5v9a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-9Zm0 0V6.75a1.5 1.5 0 0 1 1.5-1.5h4.379a1.5 1.5 0 0 1 1.06.44l1.122 1.121a1.5 1.5 0 0 0 1.06.44H18.75a1.5 1.5 0 0 1 1.5 1.5v.75",
  Database: ["M19.5 5.25v13.5M19.5 5.25c0-1.66-3.36-3-7.5-3s-7.5 1.34-7.5 3m15 0c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3m15 6.75c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3m15 6.75c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3M4.5 5.25v13.5"],
  Datasets: "M13.5 3 21 9l-7.5 6L6 9l7.5-6Zm0 12L21 21l-7.5 6L6 21l7.5-6Z",
  Bolt: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  Globe: ["M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z", "M12 3a8.97 8.97 0 0 0-3.92 9.04A8.97 8.97 0 0 0 12 21M12 3a8.97 8.97 0 0 1 3.92 9.04A8.97 8.97 0 0 1 12 21", "M3.6 9h16.8M3.6 15h16.8"],
  Book: "M12 6.04V19m0-12.96A8.97 8.97 0 0 0 6 3.75a9.93 9.93 0 0 0-2.41.32A.75.75 0 0 0 3 4.79v14.25c0 .51.5.88 1 .75A8.49 8.49 0 0 1 6 19.5a8.99 8.99 0 0 1 6 2.25m0-15.71a8.97 8.97 0 0 1 6-2.29 9.93 9.93 0 0 1 2.41.32.75.75 0 0 1 .59.72v14.25c0 .51-.5.88-1 .75a8.49 8.49 0 0 0-2-.29 8.99 8.99 0 0 0-6 2.25",
  Swatch: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.439-.439 1.151-.439 1.59 0l3.712 3.713c.44.439.44 1.151 0 1.59l-2.879 2.879M6.75 17.25h.008v.008H6.75v-.008Z",
  Cog: ["M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.127c-.331.184-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.93 6.93 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],
  ChevronDown: "m19.5 8.25-7.5 7.5-7.5-7.5",
  ChevronUp: "m4.5 15.75 7.5-7.5 7.5 7.5",
  ChevronRight: "m8.25 4.5 7.5 7.5-7.5 7.5",
  ChevronLeft: "m15.75 19.5-7.5-7.5 7.5-7.5",
  Plus: "M12 4.5v15m7.5-7.5h-15",
  Search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  Star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.111Z",
  Bookmark: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",
  Help: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  Inbox: "M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z",
  Logout: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75",
  User: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  Play: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
  Check: "m4.5 12.75 6 6 9-13.5",
  Dots: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
};
const StarSolid = ({
  size = 16,
  color = "var(--amber-400)"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: color,
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.628 2.829c-.996.608-2.232-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007Z"
}));
Object.assign(window, {
  Icon,
  I,
  StarSolid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
/* global React, Button, Input, Field, Spinner */

const Login = ({
  onLogin
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      onLogin({
        name: "Lena Marchetti",
        email,
        initials: (email[0] || "L").toUpperCase() + (email[1] || "M").toUpperCase()
      });
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: "100%",
      maxWidth: 420,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoMark || "../../assets/logo.svg",
    alt: "OpenHEXA",
    style: {
      height: 64,
      display: "block",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 24,
      fontSize: 30,
      fontWeight: 800,
      color: "var(--gray-900)",
      letterSpacing: "-.015em"
    }
  }, "Sign in")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Input, {
    fullWidth: true,
    placeholder: "Email address",
    value: email,
    onChange: e => setEmail(e.target.value),
    autoComplete: "email",
    style: {
      borderRadius: "6px 6px 0 0"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    fullWidth: true,
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    autoComplete: "current-password",
    style: {
      borderRadius: "0 0 6px 6px",
      marginTop: -1
    },
    error: !!error
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8,
      fontSize: 13,
      color: "var(--red-600)"
    }
  }, error)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--blue-600)"
    }
  }, "Forgot your password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    className: "w-full",
    style: {
      width: "100%"
    },
    disabled: loading,
    leadingIcon: loading ? /*#__PURE__*/React.createElement(Spinner, {
      size: 14,
      color: "#fff"
    }) : null
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-500)"
    }
  }, "Don't have an account?"), " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--blue-600)"
    }
  }, "Sign up")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "10px 14px",
      background: "var(--gray-50)",
      borderRadius: 6,
      fontSize: 12,
      color: "var(--gray-500)",
      textAlign: "center",
      lineHeight: 1.5
    }
  }, "Demo: enter anything in both fields to sign in.")));
};
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Pipelines.jsx
try { (() => {
/* global React, Card, Badge, Avatar, Icon, I, colorFromString */

const SEED_PIPELINES = [{
  code: "covid-monthly-aggregation",
  name: "COVID monthly aggregation",
  description: "Aggregates monthly COVID-19 case reports from DHIS2 into the workspace warehouse, with a per-district reconciliation step.",
  type: "ZIPFILE",
  version: "v1.4.2",
  lastRun: {
    status: "Success",
    tone: "success",
    relative: "4 hours ago"
  },
  user: {
    name: "Lena Marchetti",
    initials: "LM"
  }
}, {
  code: "iaso-form-export",
  name: "IASO form export",
  description: "Pulls submissions from IASO every night and writes them into `iaso_export.parquet`. Re-runs reconcile delta only.",
  type: "ZIPFILE",
  version: "v3.0.0",
  lastRun: {
    status: "Running",
    tone: "warning",
    relative: "starting now"
  },
  user: {
    name: "Tomás Mendes",
    initials: "TM"
  }
}, {
  code: "dhis2-pyramid-sync",
  name: "DHIS2 pyramid sync",
  description: "Keeps the organisation unit pyramid in `ref_org_units` synced with the upstream DHIS2 instance. Runs weekly.",
  type: "TEMPLATE",
  version: "v0.12.0",
  lastRun: {
    status: "Success",
    tone: "success",
    relative: "yesterday"
  },
  user: {
    name: "Ade Kone",
    initials: "AK"
  }
}, {
  code: "malaria-cases-per1000",
  name: "Malaria cases per 1000",
  description: "Computes monthly malaria incidence per 1000 inhabitants for every district. Output published as `malaria_per1000_v2`.",
  type: "ZIPFILE",
  version: "v2.1.0",
  lastRun: {
    status: "Failed",
    tone: "danger",
    relative: "2 days ago"
  },
  user: {
    name: "Rina Boateng",
    initials: "RB"
  }
}, {
  code: "stockout-alerts",
  name: "Stockout alerts",
  description: "Scans facility commodity stock per week and emits alerts to recipients listed in the workspace settings.",
  type: "TEMPLATE",
  version: "v0.4.1",
  lastRun: null,
  user: {
    name: "Olivia Hernández",
    initials: "OH"
  }
}, {
  code: "anc-coverage",
  name: "ANC coverage",
  description: "Antenatal-care coverage indicators by region, joined against population denominators.",
  type: "ZIPFILE",
  version: "v1.0.0",
  lastRun: {
    status: "Queued",
    tone: "info",
    relative: "1 minute ago"
  },
  user: {
    name: "Jordan Park",
    initials: "JP"
  }
}];
const Pipelines = ({
  tab,
  setTab,
  onCreateClick
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      borderBottom: "1px solid var(--gray-200)",
      marginBottom: 24
    }
  }, [{
    id: "pipelines",
    label: "Pipelines"
  }, {
    id: "templates",
    label: "Available templates"
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      padding: "10px 6px",
      borderBottom: tab === t.id ? "2px solid var(--brand-pink)" : "2px solid transparent",
      background: "transparent",
      border: 0,
      borderBottomStyle: "solid",
      borderBottomWidth: 2,
      borderBottomColor: tab === t.id ? "var(--brand-pink)" : "transparent",
      color: tab === t.id ? "var(--gray-900)" : "var(--gray-500)",
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: ".01em",
      cursor: "pointer",
      marginBottom: -1
    }
  }, t.label))), tab === "pipelines" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
      gap: 16
    }
  }, SEED_PIPELINES.map(p => /*#__PURE__*/React.createElement(PipelineCard, {
    key: p.code,
    pipeline: p
  }))) : /*#__PURE__*/React.createElement(TemplatesGrid, null));
};
const PipelineCard = ({
  pipeline
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      background: "#fff",
      borderRadius: 6,
      padding: "16px 20px",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      transition: "box-shadow 150ms",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: "var(--gray-900)",
      margin: 0,
      lineHeight: 1.2
    }
  }, pipeline.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 6,
      fontSize: 14,
      color: "var(--gray-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, null, pipeline.type), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--gray-600)",
      fontSize: 13
    }
  }, pipeline.code)), /*#__PURE__*/React.createElement("span", null, pipeline.version))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--gray-700)",
      fontSize: 14,
      lineHeight: 1.5,
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, pipeline.description), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "auto",
      paddingTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      color: "var(--gray-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, "Last Run:", pipeline.lastRun ? /*#__PURE__*/React.createElement(Badge, {
    tone: pipeline.lastRun.tone
  }, pipeline.lastRun.status) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)"
    }
  }, "Not yet run")), pipeline.lastRun && /*#__PURE__*/React.createElement("span", null, pipeline.lastRun.relative)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: pipeline.user.initials,
    color: colorFromString(pipeline.user.name),
    size: "sm",
    title: pipeline.user.name
  }))));
};
const TEMPLATES = [{
  name: "DHIS2 connector",
  source: "openhexa-templates",
  description: "Pull analytics, tracker entities or org-unit metadata from any DHIS2 instance."
}, {
  name: "Geo enrichment",
  source: "openhexa-templates",
  description: "Join a dataset against a custom shapefile and emit a flat table with the right admin codes."
}, {
  name: "Quality checks",
  source: "openhexa-templates",
  description: "Run a configurable suite of completeness and consistency checks over a workspace table."
}, {
  name: "S3 to warehouse",
  source: "openhexa-templates",
  description: "Copy any parquet/CSV files from an S3 bucket into the workspace database, with type inference."
}];
const TemplatesGrid = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 16
  }
}, TEMPLATES.map(t => /*#__PURE__*/React.createElement("article", {
  key: t.name,
  style: {
    background: "#fff",
    borderRadius: 6,
    padding: "16px 20px",
    boxShadow: "var(--shadow-xs)"
  }
}, /*#__PURE__*/React.createElement("h4", {
  style: {
    fontSize: 18,
    fontWeight: 500,
    color: "var(--gray-900)",
    margin: 0
  }
}, t.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--gray-500)",
    marginTop: 4
  }
}, t.source), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "var(--gray-700)",
    fontSize: 14,
    lineHeight: 1.5,
    marginTop: 10
  }
}, t.description), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: 2,
    background: "var(--indigo-100)",
    color: "var(--indigo-700)",
    fontSize: 13,
    fontWeight: 500
  }
}, "Use template")))));
Object.assign(window, {
  Pipelines,
  PipelineCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Pipelines.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

// ─── Button (1:1 match to core/components/Button/Button.tsx) ──────────────
const buttonClasses = {
  base: "ohb ohb-base",
  primary: "ohb-primary",
  secondary: "ohb-secondary",
  white: "ohb-white",
  outlined: "ohb-outlined",
  danger: "ohb-danger",
  sm: "ohb-sm",
  md: "ohb-md",
  lg: "ohb-lg",
  xl: "ohb-xl",
  xxl: "ohb-xxl"
};
const Button = ({
  variant = "primary",
  size = "md",
  leadingIcon,
  children,
  disabled,
  type = "button",
  className = "",
  style,
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  type: type,
  disabled: disabled,
  onClick: onClick,
  className: `ohb ohb-${variant} ohb-${size} ${className}`,
  style: style
}, leadingIcon && /*#__PURE__*/React.createElement("span", {
  className: "ohb-lead"
}, leadingIcon), children);

// ─── Badge ────────────────────────────────────────────────────────────────
const Badge = ({
  children,
  tone = "neutral",
  size = "xs",
  className = "",
  style
}) => {
  const toneStyles = {
    neutral: {
      background: "var(--gray-50)",
      color: "var(--gray-700)",
      ring: "rgb(107 114 128 / .2)"
    },
    success: {
      background: "var(--green-100)",
      color: "var(--green-600)",
      ring: "rgb(22 163 74 / .25)"
    },
    danger: {
      background: "var(--red-100)",
      color: "var(--red-600)",
      ring: "rgb(220 38 38 / .25)"
    },
    warning: {
      background: "var(--amber-50)",
      color: "#92400e",
      ring: "rgb(245 158 11 / .3)"
    },
    info: {
      background: "var(--blue-100)",
      color: "var(--blue-700)",
      ring: "rgb(37 99 235 / .25)"
    },
    pink: {
      background: "var(--red-100)",
      color: "var(--brand-pink-500)",
      ring: "rgb(255 62 150 / .25)"
    }
  };
  const s = toneStyles[tone] ?? toneStyles.neutral;
  const sizePad = size === "sm" ? "3px 10px" : size === "md" ? "5px 10px" : "2px 8px";
  const sizeFs = size === "sm" ? 13 : size === "md" ? 14 : 12;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      borderRadius: 6,
      padding: sizePad,
      fontSize: sizeFs,
      fontWeight: 500,
      lineHeight: 1.4,
      background: s.background,
      color: s.color,
      boxShadow: `inset 0 0 0 1px ${s.ring}`,
      ...style
    }
  }, children);
};

// ─── Avatar ───────────────────────────────────────────────────────────────
const Avatar = ({
  initials,
  color,
  size = "md",
  title
}) => {
  const sizes = {
    xs: [24, 12],
    sm: [32, 14],
    md: [40, 16],
    lg: [48, 18],
    xl: [56, 20]
  };
  const [d, fs] = sizes[size] ?? sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    title: title,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      width: d,
      height: d,
      borderRadius: 9999,
      background: color ?? "var(--gray-500)",
      color: "#fff",
      fontSize: fs,
      fontWeight: 500,
      lineHeight: 1
    }
  }, initials);
};

// Deterministic-ish color from a string
const colorFromString = s => {
  const palette = ["#0ea5e9", "#7c3aed", "#16a34a", "#dc2626", "#374151", "#0891b2", "#db2777", "#ea580c"];
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
  return palette[h % palette.length];
};

// ─── Card ─────────────────────────────────────────────────────────────────
const Card = ({
  title,
  subtitle,
  href,
  onClick,
  children,
  className = "",
  style
}) => {
  const inner = /*#__PURE__*/React.createElement("article", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      background: "#fff",
      borderRadius: 6,
      padding: "14px 20px",
      boxShadow: "var(--shadow-xs)",
      cursor: href || onClick ? "pointer" : "default",
      transition: "box-shadow 150ms var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      if (href || onClick) e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      if (href || onClick) e.currentTarget.style.boxShadow = "var(--shadow-xs)";
    },
    onClick: onClick
  }, title && /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.2,
      margin: 0,
      color: "var(--gray-900)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--gray-500)",
      marginTop: 4
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: "var(--gray-600)"
    }
  }, children));
  return inner;
};

// ─── Input + Field ────────────────────────────────────────────────────────
const Input = React.forwardRef(({
  error,
  leading,
  trailingIcon,
  fullWidth,
  className = "",
  style,
  ...rest
}, ref) => {
  const ringColor = error ? "var(--red-500)" : "var(--blue-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: fullWidth ? "block" : "inline-block",
      width: fullWidth ? "100%" : "auto"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 0,
      bottom: 0,
      display: "inline-flex",
      alignItems: "center",
      color: "var(--gray-400)"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: className,
    style: {
      font: "14px/1.4 var(--font-sans)",
      padding: leading ? "10px 12px 10px 36px" : "10px 12px",
      border: `1px solid ${error ? "var(--red-300)" : "var(--gray-300)"}`,
      borderRadius: 6,
      width: fullWidth ? "100%" : "auto",
      boxSizing: "border-box",
      color: error ? "var(--red-700)" : "var(--gray-900)",
      background: "#fff",
      outline: "none",
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = ringColor,
    onBlur: e => e.currentTarget.style.borderColor = error ? "var(--red-300)" : "var(--gray-300)"
  }, rest)));
});
const Field = ({
  label,
  error,
  helper,
  children,
  required,
  fullWidth = true,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: className,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: fullWidth ? "100%" : "auto"
  }
}, label && /*#__PURE__*/React.createElement("label", {
  style: {
    fontSize: 13,
    fontWeight: 500,
    color: error ? "var(--red-600)" : "var(--gray-700)"
  }
}, label, required && /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--red-500)",
    marginLeft: 2
  }
}, "*")), children, (error || helper) && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    color: error ? "var(--red-600)" : "var(--gray-500)"
  }
}, error || helper));

// ─── Title (mirrors core/components/Title.tsx) ───────────────────────────
const Title = ({
  level = 1,
  children,
  className = "",
  style
}) => {
  const map = {
    1: {
      fontSize: 24,
      fontWeight: 600,
      marginBottom: 24
    },
    2: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 16
    },
    3: {
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 12
    },
    4: {
      fontSize: 18,
      fontWeight: 500,
      marginBottom: 8
    },
    5: {
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 8
    },
    6: {
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 4
    }
  };
  const H = `h${level}`;
  return /*#__PURE__*/React.createElement(H, {
    className: className,
    style: {
      margin: 0,
      color: "var(--gray-900)",
      ...map[level],
      ...style
    }
  }, children);
};

// ─── Spinner ──────────────────────────────────────────────────────────────
const Spinner = ({
  size = 16,
  color = "currentColor"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  style: {
    animation: "ohSpin 1s linear infinite"
  }
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9",
  fill: "none",
  stroke: color,
  strokeOpacity: ".25",
  strokeWidth: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 0 0-9-9",
  fill: "none",
  stroke: color,
  strokeWidth: "2.5",
  strokeLinecap: "round"
}));

// Inject the global stylesheet for the buttons + spinner once.
(() => {
  if (document.getElementById("oh-primitive-styles")) return;
  const style = document.createElement("style");
  style.id = "oh-primitive-styles";
  style.textContent = `
@keyframes ohSpin { to { transform: rotate(360deg); } }
.ohb { position: relative; display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid transparent; font-weight: 500; border-radius: 2px;
  transition: background-color 150ms var(--ease-standard), color 150ms var(--ease-standard);
  cursor: pointer; }
.ohb:disabled { opacity: .5; cursor: not-allowed; }
.ohb-lead { display: inline-flex; margin: 0 6px 0 -4px; }
.ohb-sm { font-size: 12px; padding: 4px 8px; line-height: 1; }
.ohb-md { font-size: 14px; padding: 10px 12px; line-height: 1; }
.ohb-lg { font-size: 14px; padding: 10px 16px; line-height: 1; }
.ohb-xl { font-size: 16px; padding: 8px 16px; line-height: 1; }
.ohb-xxl { font-size: 16px; padding: 12px 24px; line-height: 1; }
.ohb-primary { background: var(--blue-600); color: #fff; box-shadow: var(--shadow-xs); }
.ohb-primary:hover { background: var(--blue-700); }
.ohb-secondary { background: var(--indigo-100); color: var(--indigo-700); box-shadow: var(--shadow-xs); }
.ohb-secondary:hover { background: var(--indigo-200); }
.ohb-white { background: #fff; color: var(--gray-800); border-color: var(--gray-400); box-shadow: var(--shadow-xs); }
.ohb-white:hover { background: var(--gray-50); }
.ohb-outlined { background: transparent; color: var(--gray-800); }
.ohb-outlined:hover { background: var(--gray-100); }
.ohb-danger { background: var(--red-600); color: #fff; box-shadow: var(--shadow-xs); }
.ohb-danger:hover { background: var(--red-700); }
.ohb-icon { background: transparent; color: var(--gray-500); padding: 6px; border-radius: 6px; border:0; cursor:pointer;}
.ohb-icon:hover { background: var(--gray-100); color: var(--gray-700); }
`;
  document.head.appendChild(style);
})();
Object.assign(window, {
  Button,
  Badge,
  Avatar,
  Card,
  Input,
  Field,
  Title,
  Spinner,
  colorFromString
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
/* global React, Icon, I, Avatar, Badge, colorFromString */

// ─── Sidebar (1:1 with WorkspaceLayout/Sidebar.tsx) ──────────────────────
const NAV_ITEMS = [{
  id: "home",
  label: "Home",
  icon: I.Home
}, {
  id: "files",
  label: "Files",
  icon: I.Folder
}, {
  id: "database",
  label: "Database",
  icon: I.Database
}, {
  id: "datasets",
  label: "Datasets",
  icon: I.Datasets
}, {
  id: "connections",
  label: "Connections",
  icon: I.Swatch
}, {
  id: "pipelines",
  label: "Pipelines",
  icon: I.Bolt
}, {
  id: "notebooks",
  label: "JupyterHub",
  icon: I.Book
}, {
  id: "apps",
  label: "Apps",
  icon: I.Globe
}, {
  id: "settings",
  label: "Settings",
  icon: I.Cog
}];
const Sidebar = ({
  workspace,
  current,
  onNavigate,
  user,
  onSignOut,
  open,
  onToggle
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [shortcutsOpen, setShortcutsOpen] = React.useState(true);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      width: open ? 256 : 64,
      background: "var(--gray-800)",
      color: "var(--gray-300)",
      display: "flex",
      flexDirection: "column",
      zIndex: 20,
      transition: "width 75ms var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(v => !v),
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: open ? "0 12px" : 0,
      justifyContent: open ? "flex-start" : "center",
      background: "var(--gray-800)",
      border: 0,
      color: "var(--gray-50)",
      cursor: "pointer",
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-700)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--gray-800)"
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 16,
      borderRadius: 2,
      background: "linear-gradient(180deg, #009E49 50%, #FCD116 50%)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      letterSpacing: "-.01em",
      color: "var(--gray-50)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, workspace.name), /*#__PURE__*/React.createElement(Icon, {
    d: I.ChevronDown,
    size: 16,
    style: {
      color: "var(--gray-500)"
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 16,
      borderRadius: 2,
      background: "linear-gradient(180deg, #009E49 50%, #FCD116 50%)"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "12px 0"
    }
  }, NAV_ITEMS.map(item => {
    const active = current === item.id;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(item.id);
      },
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: open ? "8px 8px" : "10px 0",
        justifyContent: open ? "flex-start" : "center",
        color: active ? "#fff" : "var(--gray-300)",
        textDecoration: "none",
        fontWeight: 500,
        fontSize: 16
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "var(--gray-700)";
        e.currentTarget.style.color = "#fff";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = active ? "#fff" : "var(--gray-300)";
      },
      title: !open ? item.label : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        background: "var(--brand-pink)",
        opacity: active ? 1 : 0,
        transition: "opacity 150ms"
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      d: item.icon,
      size: open ? 20 : 24,
      style: {
        marginLeft: open ? 4 : 0
      }
    }), open && /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, item.label));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      borderTop: "1px solid var(--gray-700)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShortcutsOpen(v => !v),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: open ? "space-between" : "center",
      width: "100%",
      padding: open ? "8px 12px" : "8px 0",
      background: "transparent",
      border: 0,
      color: "var(--gray-300)",
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Bookmark,
    size: 16
  }), open && "Shortcuts"), open && /*#__PURE__*/React.createElement(Icon, {
    d: shortcutsOpen ? I.ChevronUp : I.ChevronDown,
    size: 16
  })), shortcutsOpen && open && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 8px 8px 28px",
      color: "var(--gray-300)",
      fontSize: 14,
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-700)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Globe,
    size: 16
  }), "Country dashboard"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setUserMenuOpen(v => !v),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: open ? "12px 12px" : "12px 0",
      justifyContent: open ? "flex-start" : "center",
      background: "transparent",
      border: 0,
      color: "var(--gray-50)",
      cursor: "pointer",
      textAlign: "left",
      borderTop: "1px solid var(--gray-700)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-700)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: user.initials,
    color: colorFromString(user.name),
    size: "sm"
  }), open && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--gray-50)",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-400)",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user.email))), userMenuOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: open ? 8 : 64,
      bottom: open ? 64 : 8,
      width: 240,
      background: "#fff",
      borderRadius: 4,
      boxShadow: "var(--shadow-md), 0 0 0 1px rgb(0 0 0 / .05)",
      zIndex: 50,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "10px 12px",
      background: "var(--gray-50)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWordmark || "../../assets/logo_with_text_black.svg",
    alt: "OpenHEXA",
    style: {
      height: 26
    }
  })), [{
    icon: I.User,
    label: "Account settings",
    badge: 2
  }, {
    icon: I.Help,
    label: "Documentation"
  }].map(m => /*#__PURE__*/React.createElement("button", {
    key: m.label,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      background: "transparent",
      border: 0,
      color: "var(--gray-700)",
      fontSize: 14,
      cursor: "pointer",
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-100)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: m.icon,
    size: 18,
    style: {
      color: "var(--gray-400)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, m.label), m.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "2px 8px",
      borderRadius: 9999,
      background: "var(--red-100)",
      color: "var(--brand-pink)",
      fontSize: 12,
      fontWeight: 500
    }
  }, m.badge))), /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      background: "transparent",
      border: 0,
      color: "var(--red-600)",
      fontSize: 14,
      cursor: "pointer",
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-100)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.Logout,
    size: 18
  }), "Sign out"))), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    title: open ? "Collapse" : "Expand",
    style: {
      position: "absolute",
      right: -12,
      top: "50%",
      transform: "translateY(-50%)",
      width: 22,
      height: 38,
      background: "var(--gray-500)",
      color: "#fff",
      borderRadius: "0 6px 6px 0",
      border: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0,
      transition: "opacity 150ms"
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0
  }, /*#__PURE__*/React.createElement(Icon, {
    d: open ? I.ChevronLeft : I.ChevronRight,
    size: 14
  })));
};
Object.assign(window, {
  Sidebar,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

})();
