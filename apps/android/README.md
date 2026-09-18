# EmberAI Android

The Android application is a native, offline-first character and storytelling client. The initial home flow lets a user begin creating a character and establishes the privacy/local-generation product language.

## Android SDK support

- **Android 16:** API level 36 is the compile and target SDK.
- **Android 17:** API level 37 is installed in CI to keep the build environment ready for forward-compatibility validation. It is not the app target until Android 17 is a stable platform supported by the Android Gradle Plugin.
- Java and Kotlin both target JDK 17.

CI provisions Android 16/17 platform SDKs with `sdkmanager` and Gradle 8.10.2 with `gradle/actions/setup-gradle`. No Gradle wrapper binary is committed, so hosts that reject binary pull-request diffs remain compatible.

## Local checks

Configure an Android SDK using `ANDROID_HOME` (or `local.properties`), install `platforms;android-36`, and run:

```bash
gradle :app:testDebugUnitTest :app:assembleDebug :app:bundleRelease
```
