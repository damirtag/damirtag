export const resumes = {
  en: {
    name: "Damir Tagilbayev",
    role: "Backend & Full-Stack Engineer",
    location: "Almaty, Kazakhstan · Open to relocation and remote work",
    navigation: "CV navigation",
    download: "Download",
    pdf: "/assets/cv/en/Damir_Tagilbayev_CV.pdf",
    summaryTitle: "Summary",
    summary:
      "Backend and full-stack engineer experienced in production microservices, fintech and enterprise platforms, and an EdTech product. I build APIs and event-driven systems with NestJS, Go, Python, PostgreSQL, Redis, Kafka/NATS, and Docker. I also deliver React/Next.js interfaces, real-time features, automated tests, and production deployments.",
    experienceTitle: "Experience",
    experience: [
      {
        role: "Backend Developer",
        company: "Avrora Holding",
        context: "Almaty",
        dates: "Dec 2025 – May 2026",
        points: [
          "Shipped 10+ backend modules for a CRM/ERP platform used by 500+ people across 10+ departments.",
          "Built NestJS and Go services on PostgreSQL, delivering 40+ GraphQL/REST endpoints and gRPC APIs.",
          "Moved inter-service workflows to Kafka/NATS events, removing 10 synchronous dependencies and enabling independent deployments.",
          "Reduced the slowest SQL query execution time by 40% through indexing and query restructuring, and doubled background-job throughput.",
          "Co-designed a BPM workflow engine automating 15+ business processes, added unit and end-to-end coverage, and helped reduce backend code volume by ~30%.",
        ],
      },
      {
        role: "Full-Stack Engineer",
        company: "S&D Academy",
        context: "SAT/AP EdTech platform",
        dates: "2026",
        points: [
          "Developed a full-stack learning platform with React/Next.js, Python, and Node.js, spanning student-facing study flows and backend APIs.",
          "Built real-time study rooms and presence features with WebSockets, plus interactive exam tools and student activity features.",
          "Added Playwright end-to-end coverage and Storybook component workflows to improve UI consistency and catch regressions.",
          "Improved technical SEO and page performance, and contributed to authentication, dashboards, and production-ready learning experiences.",
        ],
      },
      {
        role: "Full-Stack Engineer",
        company: "Freelance",
        context: "Remote",
        dates: "Aug 2023 – Nov 2025",
        points: [
          "Delivered web applications and business sites with React, Next.js, TypeScript, and Node.js, and built Python and Go APIs and automation services.",
          "Integrated third-party APIs and webhooks for CRM and messaging workflows, and built Telegram automation and asynchronous data aggregation pipelines.",
          "Designed PostgreSQL/MongoDB data models and Redis-backed workflows, packaged services with Docker, and deployed to Linux VPS environments with CI/CD and Nginx.",
          "Owned delivery from requirements and system design through implementation, release, SEO and performance improvements, and production support.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Makkah Travel",
        context: "Contract",
        dates: "Jun 2023 – Aug 2023",
        points: [
          "Built a travel agency platform and admin panel for customer, document, and visa management using Node.js, TypeScript, MongoDB, and React.",
          "Implemented secure customer tracking and personal-data workflows, then configured and supported the production deployment.",
        ],
      },
    ],
    skillsTitle: "Technical skills",
    skills: [
      ["Languages", "Go, TypeScript/JavaScript, Python, SQL"],
      [
        "Backend",
        "NestJS, Django REST, Gin, REST, GraphQL, gRPC, WebSockets, event-driven systems",
      ],
      [
        "Frontend & QA",
        "React, Next.js, Storybook, Playwright, unit and end-to-end testing",
      ],
      [
        "Data & infrastructure",
        "PostgreSQL, Redis, MongoDB, Kafka, NATS, Docker, Linux, Nginx, GitHub Actions, GitLab CI",
      ],
      ["Additional", "API integrations, webhooks, SEO, CI/CD, system design"],
    ],
    educationTitle: "Education & languages",
    education: [
      "METU, Almaty — B.Sc. in Information Technologies, 2026",
      "nFactorial Incubator, 2024 (competitive selection)",
      "Kazakh (native) · Russian (fluent) · English (B2)",
    ],
  },
  ru: {
    name: "Дамир Тагильбаев",
    role: "Backend- и Full-Stack-разработчик",
    location: "Алматы, Казахстан · Рассматриваю релокацию и удалённую работу",
    navigation: "Навигация по резюме",
    download: "Скачать",
    pdf: "/assets/cv/ru/Damir_Tagilbayev_CV_RU.pdf",
    summaryTitle: "О себе",
    summary:
      "Backend- и full-stack-разработчик с опытом создания production-микросервисов, платформ для fintech и enterprise, а также EdTech-продукта. Разрабатываю API и event-driven системы на NestJS, Go, Python, PostgreSQL, Redis, Kafka/NATS и Docker. Создаю интерфейсы на React/Next.js, функции реального времени, автоматизированные тесты и production-деплои.",
    experienceTitle: "Опыт работы",
    experience: [
      {
        role: "Backend-разработчик",
        company: "Avrora Holding",
        context: "Алматы",
        dates: "дек. 2025 – май 2026",
        points: [
          "Выпустил в production 10+ backend-модулей CRM/ERP-платформы, которой пользуются 500+ сотрудников в 10+ подразделениях.",
          "Разработал сервисы на NestJS и Go с PostgreSQL, включая 40+ GraphQL/REST-эндпоинтов и gRPC API.",
          "Перевёл межсервисные процессы на события Kafka/NATS, устранив 10 синхронных зависимостей и обеспечив независимый деплой.",
          "Сократил время выполнения самых медленных SQL-запросов на 40% за счёт индексов и перестройки запросов, удвоил пропускную способность фоновых задач.",
          "Совместно спроектировал BPM-движок, автоматизировавший 15+ бизнес-процессов, добавил unit- и end-to-end-тесты и помог уменьшить объём backend-кода примерно на 30%.",
        ],
      },
      {
        role: "Full-Stack-разработчик",
        company: "S&D Academy",
        context: "EdTech-платформа подготовки к SAT/AP",
        dates: "2026",
        points: [
          "Разработал full-stack-платформу для подготовки к SAT/AP на React/Next.js, Python и Node.js, включая пользовательские сценарии обучения и backend API.",
          "Создал учебные комнаты и индикацию присутствия в реальном времени на WebSockets, интерактивные инструменты для экзаменов и функции учебной активности.",
          "Добавил end-to-end-тесты на Playwright и настроил работу с компонентами через Storybook для единообразия интерфейса и защиты от регрессий.",
          "Улучшил техническое SEO и производительность страниц, участвовал в создании аутентификации, дашбордов и готовых к production учебных сценариев.",
        ],
      },
      {
        role: "Full-Stack-разработчик",
        company: "Фриланс",
        context: "Удалённо",
        dates: "авг. 2023 – нояб. 2025",
        points: [
          "Создавал веб-приложения для клиентов и сайты для бизнеса на React, Next.js, TypeScript и Node.js, разрабатывал API и сервисы автоматизации на Python и Go.",
          "Интегрировал сторонние API и вебхуки для CRM и коммуникационных процессов, разрабатывал автоматизацию для Telegram и конвейеры сбора данных с асинхронной обработкой.",
          "Проектировал модели данных PostgreSQL/MongoDB и сценарии с Redis, упаковывал сервисы в Docker и разворачивал их на Linux VPS с CI/CD и Nginx.",
          "Вёл проекты от сбора требований и проектирования до реализации, релиза, улучшения SEO и производительности и поддержки production-систем.",
        ],
      },
      {
        role: "Full-Stack-разработчик",
        company: "Makkah Travel",
        context: "Контракт",
        dates: "июнь – авг. 2023",
        points: [
          "Создал платформу турагентства и админ-панель для работы с клиентами, документами и визами на Node.js, TypeScript, MongoDB и React.",
          "Реализовал безопасные сценарии учёта клиентов и обработки персональных данных, настроил и поддерживал production-деплой.",
        ],
      },
    ],
    skillsTitle: "Технические навыки",
    skills: [
      ["Языки", "Go, TypeScript/JavaScript, Python, SQL"],
      [
        "Backend",
        "NestJS, Django REST, Gin, REST, GraphQL, gRPC, WebSockets, event-driven системы",
      ],
      [
        "Frontend и QA",
        "React, Next.js, Storybook, Playwright, unit- и e2e-тестирование",
      ],
      [
        "Данные и инфраструктура",
        "PostgreSQL, Redis, MongoDB, Kafka, NATS, Docker, Linux, Nginx, GitHub Actions, GitLab CI",
      ],
      [
        "Дополнительно",
        "Интеграции API, вебхуки, SEO, CI/CD, проектирование систем",
      ],
    ],
    educationTitle: "Образование и языки",
    education: [
      "METU, Алматы — бакалавриат по информационным технологиям, 2026",
      "nFactorial Incubator, 2024 (конкурсный отбор)",
      "Казахский (родной) · Русский (свободно) · Английский (B2)",
    ],
  },
};
