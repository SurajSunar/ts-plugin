### About the Project

This repository serves as an experimental environment to deeply understand how plugin-driven architectures work. The goal is to explore how applications can be designed to be extensible, modular, and maintainable by allowing external components—plugins—to integrate seamlessly.  
It demonstrates the core principles behind plugin discovery, registration, execution, and lifecycle management, making it a useful reference for developers looking to build scalable systems that support customization without modifying the core application.

---

### Components Overview

#### **App**

The main entry point of the system. It initializes the application, sets up the necessary environment, and orchestrates how different components—such as the Blog Engine and Plugin Manager—interact. This layer ensures the system starts in a predictable and structured manner.

#### **Blog Engine**

This is the core application that provides essential blogging functionalities. It defines the base features such as rendering posts, handling user interactions, and managing content workflows.  
In addition to its built-in capabilities, the Blog Engine is intentionally designed with extension points. These allow external plugins to hook into various events or processes, enabling developers to enhance or modify behavior without touching the internal logic of the engine.

#### **Plugin Manager**

A dedicated component responsible for discovering, loading, validating, and executing plugins.  
Its core responsibilities include:

- Scanning the plugin directory for available plugins
- Registering and initializing plugins
- Managing plugin lifecycle events
- Invoking plugin logic whenever the Blog Engine triggers specific hooks
