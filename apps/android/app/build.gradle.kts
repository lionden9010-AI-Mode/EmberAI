plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.emberai.app"
    // Android 16 is API 36. Android 17 (API 37) is installed in CI for forward-compatibility checks.
    compileSdk = 36

    defaultConfig {
        applicationId = "com.emberai.app"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "0.1.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    // Keep Java and Kotlin bytecode targets aligned for JDK 17 CI and local builds.
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

kotlin {
    jvmToolchain(17)
}
