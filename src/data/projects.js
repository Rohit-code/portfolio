export const projects = [
  {
    id: 6,
    title: "Vector-Based Search Platform",
    description: "A comprehensive search platform built with Django and vector similarity for enhanced retrieval capabilities, designed for multi-tenant environments with high concurrency support.",
    images: [
      "/projects/spc1.jpg",
      "/projects/spc2.jpg",
      "/projects/spc3.jpg",
      "/projects/spc4.jpg",
    ],
    category: "backend",
    features: [
      "Sub-50ms response times for vector similarity searches",
      "Multi-tenant architecture with isolated data storage",
      "Microservices design pattern for scalable deployment",
      "Automatic scaling based on traffic patterns",
      "Comprehensive test coverage (98%) with continuous integration",
      "Real-time monitoring with Prometheus and Grafana"
    ],
    technologies: ["Django", "PostgreSQL", "Docker", "AWS", "Vector DB", "Redis", "Prometheus"],
    // demoLink: "https://example.com/demo",
    // githubLink: "https://github.com/yourusername/vector-search"
  },
  {
    id: 2,
    title: "Financial Document Retrieval System",
    description: "Secure microservice-based system for financial document management with role-based access control, real-time document access, and high reliability.",
    images: [
      "/projects/financial-docs.jpg",
      "/projects/financial-docs-2.jpg",
      "/projects/financial-docs-3.jpg",
      "/projects/financial-docs-4.jpg"
    ],
    category: "microservices",
    features: [
      "Real-time document access with 99.7% uptime",
      "JWT-based authentication and role-based access control",
      "Containerized deployment with Docker and orchestration",
      "Automated testing with 95% code coverage",
      "Reduced production bugs by 78% through comprehensive testing",
      "Cloud-based deployment on Azure with automated scaling"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Azure", "JWT", "Jest"],
    // demoLink: "https://example.com/demo",
    // githubLink: "https://github.com/yourusername/financial-docs"
  },
  {
    id: 3,
    title: "Real-Time Analytics Platform",
    description: "High-throughput data analytics application built with Spring Boot for real-time insights with optimized database queries and comprehensive monitoring.",
    images: [
      "/analytics/analy-1.png",
      "/analytics/analy-2.png",
      "/analytics/analy-3.png",
      "/analytics/analy-4.png",
      "/analytics/analy-5.png"
    ],
    category: "fullstack",
    features: [
      "Improved throughput by 30% for real-time data processing",
      "Boosted data retrieval speed by 35% through query optimization",
      "Secure OAuth2 authentication and authorization",
      "Containerized deployment for consistent environments",
      "Real-time performance tracking with Prometheus and Grafana",
      "Comprehensive API documentation with Swagger"
    ],
    technologies: ["Spring Boot", "Hibernate", "PostgreSQL", "React", "Docker", "OAuth2", "Grafana"],
    // demoLink: "https://example.com/demo",
    // githubLink: "https://github.com/yourusername/analytics-platform"
  },
  {
    id: 4,
    title: "Cloud-Native Document Storage",
    description: "Serverless document management system built on AWS Lambda and S3 with secure authentication and automated CI/CD pipelines for rapid deployment.",
    images: [
      "/projects/document-storage.jpg",
      "/projects/document-storage-2.jpg",
      "/projects/document-storage-3.jpg",
      "/projects/document-storage-4.jpg"
    ],
    category: "cloud",
    features: [
      "Serverless architecture using AWS Lambda and API Gateway",
      "Secure document storage with S3 and MongoDB integration",
      "JWT and OAuth2 authentication with 99.8% security audit compliance",
      "Automated testing and CI/CD pipelines",
      "Reduced deployment time by 65% with automated processes",
      "Comprehensive API testing with Postman collections"
    ],
    technologies: ["AWS Lambda", "S3", "API Gateway", "MongoDB", "JWT", "CI/CD", "Postman"],
    // demoLink: "https://example.com/demo",
    // githubLink: "https://github.com/yourusername/document-storage"
  },
  {
    id: 5,
    title: "API Authentication Service",
    description: "Centralized authentication and authorization service supporting multiple protocols including OAuth2, JWT, and API keys with comprehensive audit logging.",
    images: [
      "/projects/auth-service.jpg",
      "/projects/auth-service-2.jpg",
      "/projects/auth-service-3.jpg",
      "/projects/auth-service-4.jpg"
    ],
    category: "security",
    features: [
      "Support for multiple authentication protocols (OAuth2, JWT, API keys)",
      "Role-based access control with fine-grained permissions",
      "Comprehensive audit logging for security compliance",
      "High-availability design with 99.9% uptime",
      "Token revocation and refresh capabilities",
      "Integration with external identity providers"
    ],
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "OAuth2", "JWT", "Docker"],
    // demoLink: "https://example.com/demo", 
    // githubLink: "https://github.com/yourusername/auth-service"
  },
  {
    id: 6,
    title: "AI-Powered Content Recommendation",
    description: "Machine learning system for content recommendations using NLP and vector embeddings to provide personalized user experiences with high accuracy.",
    images: [
      "/ai_project/rag_search.jpg",
      "/ai_project/rag_search1.jpg",
      "/ai_project/rag_search2.jpg",
      "/ai_project/rag_search3.jpg"
    ],
    category: "ai",
    features: [
      "Natural Language Processing for content analysis",
      "Vector embeddings for semantic similarity matching",
      "Personalized recommendation engine with 87% accuracy",
      "Real-time user preference tracking",
      "A/B testing framework for algorithm optimization",
      "Scalable processing pipeline for large content libraries"
    ],
    technologies: ["Python", "Django", "FAISS", "AWS", "NLP", "Vector Embeddings", "PostgreSQL"],
    // demoLink: "https://example.com/demo",
    // githubLink: "https://github.com/yourusername/content-recommendation"
  }
];