# EmberAI Android

The Android app targets Java/Kotlin 17 and API 35. CI provisions Gradle 8.10.2 through `gradle/actions/setup-gradle`; no Gradle wrapper binary is committed so hosting systems that reject binary pull-request diffs remain compatible.

## Local checks

Install Gradle 8.10.2 (or use a compatible locally managed Gradle installation), then run:

```bash
gradle :app:testDebugUnitTest :app:assembleDebug :app:bundleRelease
```
