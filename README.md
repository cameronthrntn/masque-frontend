<h1 align="center" style="color: #26ed97">
  MASQUE 🎭
</h1>
<h2 align="center"  style="color: #61dafb">
  - Mobile Front-End -
</h2>

<p align="center" style="font-size: 1.2rem; color: #969696">
  ||| This project is a Work In Progress |||
</p>
<p align="center" style="font-size: 1.2rem;">
  A "social" media platform with the goal of complete anonymity of users.
</p>

<hr />


The Masque platform uses an [**API**][a] built in [**Ruby on Rails**][r], for mobile devices - the front end is built using [**React-Native**][rn] with plans to build a standard web version using [**React**][rjs] in the future.

[a]: https://github.com/Shubwub/masque-api
[ax]: https://github.com/axios/axios
[r]: https://github.com/rails/rails
[rn]: https://github.com/facebook/react-native
[rna]: https://github.com/react-navigation/react-navigation
[rjs]: https://github.com/facebook/react
[e]: https://github.com/expo/expo
[adb]: https://developer.android.com/studio/command-line/adb
[at]: https://atomicdesign.bradfrost.com/chapter-2/

- ## 📋 Requirements

  The requirements for running this application locally are the same as any [**React-Native**][rn] application, of course with additional dependancies provided by npm.

- ## 🎉 Installation and setup

  At the time of writing, the [**API**][a] is not deployed anywhere and thus must also be installed and launched locally. Once this repository is cloned, dependencies must be met through:

  ```bash
    npm i
  ```

  This project uses [**Expo**][e], and so the Expo app must be installed from the Google Play/Apple app store prior to local development.

  If local development is being performed on an android mobile device connected through USB, basic port-reversing will be required to connect to the local API, a quick setup can be performed through [**adb**][adb]:

  ```bash
    adb kill-server
    adb devices
    adb -s <DEVICE_ID> reverse tcp:<API_PORT> tcp:<API_PORT>
  ```

  This allows the port used on your mobile device to send and recieve data to/from a locally run API. Currently no testing has been done on IOS, documentation to follow.

  Once your local environment is setup, `expo start` to run the app locally.

- ## 📖 Documentation

  - ### 🚧 Structure
    This project uses React hooks for state management such as **useState** and **useEffect**, along with any custom hooks.
    The project also tries to follow an [**atomic**][at] component structure. The basic idea being to split components into organisms, molecules and atoms. organisms being made of many molecules, and molecules being made of many atoms.
  - ### 🚗 Navigation
    Navigation through the app is accomplished through [**React-Navigation**][rna], using a combination of Stack and Bottom-tab navigation.
  - ### 💎 API
    As stated previously, the [**API**][a] can be found in a different repo. Requests to the API are done through [**axios**][ax]. All requesting methods should be kept to the `/services` directory.

- ## ✉️ Contact

  I'm more than happy discuss anything you find on this repo, please feel free to contact me at [contact@cameronthornton.dev](mailto:contact@cameronthornton.dev) for any discussion or feedback.

- ## 📄 License
  This project does not carry a license, and therefore all rights are currently reservedd and this project is **not** open-source. If you wish to modify or redistribute this project please reach out using the email provided above.
