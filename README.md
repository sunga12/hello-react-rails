# Hello React Rails

<a name="readme-top"></a>

# 📗 Table of Contents

- [Hello React Rails](#hello-react-rails)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Random Greetings ](#-random-greetings-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Run rails](#run-rails)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
      - [Institution](#institution)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Random Greetings <a name="about-project"></a>

**[Description]**

The project returns a greeting in a random language. Built with ROR for the Back end and React & Redux toolkit, bundled with Webpack for the Front end.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- Ruby on Rails >=7
- React
- Postgres
- Webpack

### Key Features <a name="key-features"></a>

- Displays One Random greeting in a random language

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites

- [Ruby on Rails >=7](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [Postgres](https://www.postgresql.org/)
- [Git](https://git-scm.com/downloads)

### Install

```
git clone https://github.com/sunga12/hello-react-rails.git
cd hello-react-rails
bundle install
npm install
```

### Run rails

To configure the database connection in Rails, you need to update the database.yml file located in the config folder. Follow these steps: Locate the database.yml file in the config folder of your Rails application.

1. Open the database.yml file using a text editor.

2. Find the default: &default section in the file.

3. Add the following lines under the default: &default section:

```
  host: localhost
  username: your_username
  password: your_password
```

4. Replace your_username with your actual database username and your_password with your actual database password.
5. Save the changes to the database.yml file.
6. Run

```
rails db:create
```

```
rails db:migrate
```

```
npm run build
```

```
rails s
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Sunga Thawethe**

- GitHub: [sunga12](https://github.com/sunga12)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/sungabanja-thawethe/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- Add extra styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you found this project helpful, consider giving a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to express our deepest gratitude to all the people and institutions that have contributed to make this project possible.

#### Institution

- **Microverse**: My sincerest thanks for creating this bootcamp. The program's structure and the quality of education provided have been crucial for my growth as a developer.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>