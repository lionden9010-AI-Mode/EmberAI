package com.emberai.app

import android.app.Activity
import android.graphics.Color
import android.os.Bundle
import android.view.Gravity
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView

/**
 * Offline-first native foundation. A local model adapter will retrieve bounded,
 * relevant memories rather than replay an entire conversation into the prompt.
 */
class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val density = resources.displayMetrics.density
        fun px(value: Int) = (value * density).toInt()
        val content = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(px(28), px(56), px(28), px(28))
            setBackgroundColor(Color.rgb(24, 19, 30))
        }
        content.addView(TextView(this).apply {
            text = "✦  emberai"
            textSize = 28f
            setTextColor(Color.rgb(248, 217, 152))
        })
        content.addView(TextView(this).apply {
            text = "Start a story that remembers."
            textSize = 30f
            setTextColor(Color.rgb(255, 240, 209))
            setPadding(0, px(40), 0, px(10))
        })
        content.addView(TextView(this).apply {
            text = "Create an original character, shape their world, and decide what stays private on this device."
            textSize = 16f
            setTextColor(Color.rgb(203, 189, 204))
            setPadding(0, 0, 0, px(28))
        })
        val characterName = EditText(this).apply {
            hint = "Character name"
            setHintTextColor(Color.rgb(170, 155, 174))
            setTextColor(Color.WHITE)
            setSingleLine()
        }
        content.addView(characterName)
        content.addView(Button(this).apply {
            text = "Create character"
            setOnClickListener {
                val name = characterName.text.toString().trim().ifEmpty { "a new character" }
                text = "${name.replaceFirstChar { it.uppercase() }} is ready to meet you"
                isEnabled = false
            }
        }, LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT).apply { topMargin = px(20) })
        content.addView(TextView(this).apply {
            text = "Private by default • Local generation ready • Your memories stay yours"
            textSize = 13f
            gravity = Gravity.CENTER_HORIZONTAL
            setTextColor(Color.rgb(229, 164, 91))
            setPadding(0, px(34), 0, 0)
        })
        setContentView(content)
    }
import android.os.Bundle
import android.widget.TextView
/** Native shell; local model adapters must retrieve bounded long-term memories, not replay all chat history. */
class MainActivity : Activity() {
  override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState); setContentView(TextView(this).apply { text = "EmberAI\nYour stories, your space."; textSize = 24f; setPadding(48, 96, 48, 48) }) }
}
