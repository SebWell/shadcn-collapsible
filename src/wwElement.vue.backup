<template>
  <div 
    :class="cn(
      'space-y-2',
      content.customClass
    )"
  >
    <!-- Trigger -->
    <button
      type="button"
      :disabled="content.disabled"
      :class="cn(
        'flex w-full items-center justify-between rounded-md p-2 text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        content.triggerVariant === 'outline' && 'border border-input bg-background',
        content.triggerVariant === 'ghost' && 'hover:bg-accent',
        content.triggerVariant === 'default' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        content.triggerClass
      )"
      @click="toggle"
      :aria-expanded="isOpen"
      :aria-controls="`collapsible-content-${componentId}`"
    >
      <!-- Trigger content -->
      <div class="flex items-center gap-2">
        <!-- Custom trigger icon -->
        <div 
          v-if="content.showTriggerIcon"
          :class="cn(
            'h-4 w-4 shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
        
        <!-- Trigger text -->
        <span>{{ content.triggerText }}</span>
      </div>
      
      <!-- Badge with count -->
      <div 
        v-if="content.showBadge && content.badgeText"
        :class="cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
          'bg-secondary text-secondary-foreground'
        )"
      >
        {{ content.badgeText }}
      </div>
    </button>

    <!-- Collapsible content -->
    <Transition
      :name="content.animation"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div
        v-show="isOpen"
        :id="`collapsible-content-${componentId}`"
        ref="contentRef"
        :class="cn(
          'overflow-hidden',
          content.contentClass
        )"
      >
        <div 
          :class="cn(
            'pb-4 pt-0',
            content.contentPadding && 'px-4',
            content.contentBackground && 'rounded-md bg-muted/50'
          )"
        >
          <!-- Slot for content -->
          <slot>
            <!-- Default content if no slot provided -->
            <div 
              v-if="content.defaultContent"
              :class="cn(
                'text-sm text-muted-foreground',
                content.textClass
              )"
            >
              {{ content.defaultContent }}
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { cn } from './cn.js'

const props = defineProps({
  content: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue', 'toggle', 'open', 'close'])

// Reactive data
const internalOpen = ref(false)
const contentRef = ref(null)
const componentId = ref(`collapsible-${Math.random().toString(36).substr(2, 9)}`)

// Computed properties
const isOpen = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalOpen.value,
  set: (value) => {
    if (props.modelValue !== undefined) {
      emit('update:modelValue', value)
    } else {
      internalOpen.value = value
    }
  }
})

// Methods
const toggle = () => {
  if (content.value?.disabled) return
  
  const newValue = !isOpen.value
  isOpen.value = newValue
  
  emit('toggle', newValue)
  
  if (newValue) {
    emit('open')
  } else {
    emit('close')
  }
}

const open = () => {
  if (!isOpen.value) {
    toggle()
  }
}

const close = () => {
  if (isOpen.value) {
    toggle()
  }
}

// Animation handlers
const onEnter = (el) => {
  if (content.value?.animation === 'slide') {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
    nextTick(() => {
      el.style.height = el.scrollHeight + 'px'
    })
  }
}

const onAfterEnter = (el) => {
  if (content.value?.animation === 'slide') {
    el.style.height = 'auto'
    el.style.overflow = 'visible'
  }
}

const onBeforeLeave = (el) => {
  if (content.value?.animation === 'slide') {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  }
}

const onLeave = (el) => {
  if (content.value?.animation === 'slide') {
    nextTick(() => {
      el.style.height = '0px'
    })
  }
}

// Watchers
watch(() => content.value?.defaultOpen, (newValue) => {
  if (newValue && !isOpen.value) {
    isOpen.value = true
  }
}, { immediate: true })

// Lifecycle
onMounted(() => {
  if (content.value?.defaultOpen) {
    internalOpen.value = true
  }
})

// Expose methods
defineExpose({
  toggle,
  open,
  close,
  isOpen: readonly(isOpen)
})
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: height 0.3s ease;
}

/* Scale animation */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
  transform-origin: top;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style> 