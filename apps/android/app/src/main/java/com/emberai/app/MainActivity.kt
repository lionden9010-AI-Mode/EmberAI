package com.emberai.app

import android.app.Activity
import android.os.Bundle
import android.widget.TextView
/** Native shell; local model adapters must retrieve bounded long-term memories, not replay all chat history. */
class MainActivity : Activity() {
  override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState); setContentView(TextView(this).apply { text = "EmberAI\nYour stories, your space."; textSize = 24f; setPadding(48, 96, 48, 48) }) }
}
