import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"

interface Route {
  path: string
  title: string
}

const SOL_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Hello World",
  },
  {
    path: "first-app",
    title: "İlk App",
  },
  {
    path: "primitives",
    title: "Basit Veri Tipleri (Primitive Data Types)",
  },
  {
    path: "variables",
    title: "Değişkenler (Variables)",
  },
  {
    path: "constants",
    title: "Sabitler (Constants)",
  },
  {
    path: "immutable",
    title: "Değişmezler (Immutable)",
  },
  {
    path: "state-variables",
    title: "Durum Değişkeni Yazma ve Okuma (State Variable)",
  },
  {
    path: "ether-units",
    title: "Ether ve Wei",
  },
  {
    path: "gas",
    title: "Gas ve Gas Price",
  },
  // Flow control
  {
    path: "if-else",
    title: "If / Else",
  },
  {
    path: "loop",
    title: "For ve While Loop",
  },
  // collection data types
  {
    path: "mapping",
    title: "Mapping",
  },
  {
    path: "array",
    title: "Array",
  },
  // custom data types
  {
    path: "enum",
    title: "Enum",
  },
  {
    path: "structs",
    title: "Structs",
  },
  {
    path: "data-locations",
    title: "Veri Konumları - Depolama, Bellek ve Çağrı Verileri",
  },
  // function
  {
    path: "function",
    title: "Fonksiyonlar (Function)",
  },
  {
    path: "view-and-pure-functions",
    title: "Görünüm ve Saf Fonksiyonlar (View and Pure)",
  },
  {
    path: "error",
    title: "Error",
  },
  {
    path: "function-modifier",
    title: "Fonksiyon Değiştirici (Function Modifier)",
  },
  {
    path: "events",
    title: "Olaylar (Events)",
  },
  // inheritance
  {
    path: "constructor",
    title: "Yapıcı (Constructor)",
  },
  {
    path: "inheritance",
    title: "Miras Alma (Inheritance)",
  },
  {
    path: "shadowing-inherited-state-variables",
    title:
      "Devralınan Durum Değişkenlerini Gölgeleme (Shadowing Inherited State Variables)",
  },
  {
    path: "super",
    title: "Ana Sözleşmeleri Çağırma (Calling Parent Contracts)",
  },
  {
    path: "visibility",
    title: "Görünürlük (Visibility)",
  },
  {
    path: "interface",
    title: "Arayüz (Interface)",
  },
  // send / receive ether
  {
    path: "payable",
    title: "Ödenebilir (Payable)",
  },
  {
    path: "sending-ether",
    title: "Ether Gönderme - Transfer ve Çağırma (Transfer, Send, and Call)",
  },
  {
    path: "fallback",
    title: "Fallback",
  },
  // contract interaction
  {
    path: "call",
    title: "Call",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "function-selector",
    title: "Fonksiyon Seçici (Function Selector)",
  },

  {
    path: "calling-contract",
    title: "Diğer Kontratı Çağırma",
  },
  {
    path: "new-contract",
    title: "Kontrat içinden kontrat oluşturma",
  },
  // misc
  {
    path: "try-catch",
    title: "Try / Catch",
  },
  {
    path: "import",
    title: "Import",
  },
  {
    path: "library",
    title: "Library",
  },
  // crypto
  {
    path: "hashing",
    title: "Keccak256 ile Hashing",
  },
  {
    path: "signature",
    title: "İmza Doğrulama (Verifying Signature)",
  },
]

const APP_ROUTES: Route[] = [
  {
    path: "ether-wallet",
    title: "Ether Wallet",
  },
  {
    path: "multi-sig-wallet",
    title: "Multi Sig Wallet",
  },
  {
    path: "merkle-tree",
    title: "Merkle Tree",
  },
  {
    path: "iterable-mapping",
    title: "Iterable Mapping",
  },
  {
    path: "erc20",
    title: "ERC20",
  },
  {
    path: "erc721",
    title: "ERC721",
  },
  {
    path: "create2",
    title: "Precompute Contract Address with Create2",
  },
  {
    path: "minimal-proxy",
    title: "Minimal Proxy Contract",
  },
  {
    path: "upgradeable-proxy",
    title: "Upgradeable Proxy",
  },
  {
    path: "deploy-any-contract",
    title: "Deploy Any Contract",
  },
  {
    path: "write-to-any-slot",
    title: "Write to Any Slot",
  },
  {
    path: "uni-directional-payment-channel",
    title: "Uni-directional Payment Channel",
  },
  {
    path: "bi-directional-payment-channel",
    title: "Bi-directional Payment Channel",
  },
  {
    path: "english-auction",
    title: "English Auction",
  },
  {
    path: "dutch-auction",
    title: "Dutch Auction",
  },
  {
    path: "crowd-fund",
    title: "Crowd Fund",
  },
  {
    path: "multi-call",
    title: "Multi Call",
  },
  {
    path: "multi-delegatecall",
    title: "Multi Delegatecall",
  },
]

const HACK_ROUTES: Route[] = [
  {
    path: "re-entrancy",
    title: "Re-Entrancy",
  },
  {
    path: "overflow",
    title: "Arithmetic Overflow and Underflow",
  },
  {
    path: "self-destruct",
    title: "Self Destruct",
  },
  {
    path: "accessing-private-data",
    title: "Accessing Private Data",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "randomness",
    title: "Source of Randomness",
  },
  {
    path: "denial-of-service",
    title: "Denial of Service",
  },
  {
    path: "phishing-with-tx-origin",
    title: "Phishing with tx.origin",
  },
  {
    path: "hiding-malicious-code-with-external-contract",
    title: "Hiding Malicious Code with External Contract",
  },
  {
    path: "honeypot",
    title: "Honeypot",
  },
  {
    path: "front-running",
    title: "Front Running",
  },
  {
    path: "block-timestamp-manipulation",
    title: "Block Timestamp Manipulation",
  },
  {
    path: "signature-replay",
    title: "Signature Replay",
  },
  {
    path: "contract-size",
    title: "Bypass Contract Size Check",
  },
]

const TEST_ROUTES: Route[] = [
  {
    path: "echidna",
    title: "Echidna",
  },
]

const DEFI_ROUTES = [
  {
    path: "uniswap-v2",
    title: "Uniswap V2 Swap",
  },
  {
    path: "uniswap-v2-add-remove-liquidity",
    title: "Uniswap V2 Add Remove Liquidity",
  },
  {
    path: "uniswap-v2-optimal-one-sided-supply",
    title: "Uniswap V2 Optimal One Sided Supply",
  },
  {
    path: "chainlink-price-oracle",
    title: "Chainlink Price Oracle",
  },
  {
    path: "staking-rewards",
    title: "Staking Rewards",
  },
  {
    path: "constant-sum-amm",
    title: "Constant Sum AMM",
  },
  {
    path: "constant-product-amm",
    title: "Constant Product AMM",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Applications",
    routes: APP_ROUTES.map((route) => ({
      ...route,
      path: `/app/${route.path}`,
    })),
  },
  {
    title: "Hacks",
    routes: HACK_ROUTES.map((route) => ({
      ...route,
      path: `/hacks/${route.path}`,
    })),
  },
  {
    title: "Tests",
    routes: TEST_ROUTES.map((route) => ({
      ...route,
      path: `/tests/${route.path}`,
    })),
  },
  {
    title: "DeFi",
    routes: DEFI_ROUTES.map((route) => ({
      ...route,
      path: `/defi/${route.path}`,
    })),
  },
]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

const UPDATES = [
  "2022/03/11 - Github PR by devanonon",
  "2022/03/11 - Github PR by amimaro",
  "2022/03/10 - Constant product AMM",
  "2022/02/26 - Multi call",
]

export default function HomePage() {
  return (
    <div className={styles.component}>
      <SEO
        title="Örneklerle Solidity Türkçe | 0.8.10"
        description="Solidity il akıllı kontrat yazmayı türkçe öğrenin"
      />
      <h1 className={styles.header}>
        <a href="/">Örneklerle Solidity - Türkçe</a>
      </h1>
      <div className={styles.subHeader}>v 0.8.10</div>
      <div className={styles.main}>
      <p style={{color: "red"}}>
         Türkçeleştirmeye devam ediyorum. Sayfa <strong>mapping</strong> konusuna kadar türkçeleştirildi.
        </p>
        <p>
          <a href="https://solidity.readthedocs.io">Solidity</a> i örneklerle öğrenin.
        </p>

        <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Çoğu kod burada açıklanmıştır.
          </a>
        </div>

        <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>

        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
