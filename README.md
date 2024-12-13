# Open Source Tap4 AI Webové Rozhraní

Toto je open-source projekt Adresáře AI Nástrojů od [Tap4 AI Tool Directory](https://tap4.ai). Naším cílem je umožnit každému mít vlastní Adresář AI Nástrojů pro sběr oblíbených AI produktů. Tento projekt je velmi odlehčený a snadno udržovatelný, vhodný pro jednotlivé vývojáře se zájmem o AI navigační stránky a také pro studenty se zájmem o NextJs. Každý je vítán k forknutí a označení hvězdičkou.

[Zjednodušená čínština](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.zh-CN.md) | Čeština

## Podpořte Tap4 AI na Product Hunt

<a href="https://www.producthunt.com/posts/ai-tools-directory-by-tap4-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;tools&#0045;directory&#0045;by&#0045;tap4&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464357&theme=light" alt="AI&#0032;Tools&#0032;Directory&#0032;by&#0032;Tap4&#0032;AI - Open&#0045;source&#0032;AI&#0032;navigation&#0032;&#0038;&#0032;discovery&#0032;with&#0032;multi&#0045;language | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Poznámky k verzi 2.0.0

- Data AI stránek jsou uložena v databázi Supabase
- Je propojena s projektem Tap4 AI crawler, podporující plně automatické odesílání a sběr
- Podporuje jednoduché kategorizování a vyhledávání

Poznámka: Pokud nejste obeznámeni s databází nebo máte obavy ohledně kompatibility s verzí 1.0.0, přepněte prosím na [větev verze 1.0.0](https://github.com/6677-ai/tap4-ai-webui/tree/v1.0.0).

## Představení nejnovějších funkcí

- Podporuje zobrazení seznamů AI nástrojů
- Podporuje filtrování kategorií AI nástrojů
- Podporuje vyhledávání AI nástrojů
- Podporuje zobrazení detailů AI nástrojů v Markdown
- SEO přívětivý (podporuje i18n)

## Popis technického stacku

- Používá NEXT 14 a app routing (React server komponenty)
- Supabase serverless databáze
- Internacionalizace
- SEO přívětivý (podporuje i18n)
- Dynamický sitemap.xml (podporuje i18n)
- Tailwind CSS

## Screenshot front-endu

![tap4-ai](./public/images/tap4ai.zh-CN.png)

## Odkazy pro sledování a podporu

Sledujte nás prosím na Twitteru: https://x.com/tap4ai

Pokud vám projekt pomohl, zvažte prosím koupi kávy:

<a href="https://www.buymeacoffee.com/tap4ai0o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Pokud máte zájem o projekt, přidejte si mě na WeChat: helloleo2023, poznámka: "tap4 ai open source"

## Pokyny k nasazení

### Nasazení Tap4 AI Crawleru

Podrobnosti viz [Tap4 AI Crawler](https://github.com/6677-ai/tap4-ai-crawler). Po nasazení můžete použít doménu platformy nebo vlastní doménu jako API rozhraní pro generování obsahu webových stránek AI nástrojů (např. https://{crawler_domain}/site/crawl, kde {crawler_domain} je vaše specifická doména).

**Musíte to nakonfigurovat v proměnné prostředí CRAWLER_API.**

### Vytvoření Supabase databáze a spuštění SQL skriptů

- Zaregistrujte se na [Supabase](https://supabase.com/), vytvořte databázi a zaznamenejte si SUPABASE_URL a SUPABASE_ANON_KEY pro pozdější nasazení proměnných prostředí na Vercel.
- Spusťte SQL soubory z adresáře db projektu na backendu Supabase: create_table.sql, insert_category_data.sql, insert_data.sql.

**Poznámka: Pokud potřebujete upravit data, můžete se podívat do SQL souborů nebo je přímo upravit na backendu Supabase.**

### Nasazení na Vercel **(Nezapomeňte nastavit proměnné prostředí)**

[![Nasadit s Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F6677-ai%2Ftap4-ai-webui.git&env=NEXT_PUBLIC_SITE_URL,GOOGLE_TRACKING_ID,GOOGLE_ADSENSE_URL,CONTACT_US_EMAIL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,CRAWLER_API,CRAWLER_API_KEY,CRON_AUTH_KEY,SUBMIT_AUTH_KEY&project-name=tap4-ai)

Parametry prostředí jsou následující: **Poznámka: Všechny klíče jsou potřebné a hodnoty včetně NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY musí být vyplněny správnými hodnotami**
