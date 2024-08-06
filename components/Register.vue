<template>
    <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>


    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Full name"
            v-model:input="name"
            inputType="text"
            :autoFocus="true"
            error=""
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Email address"
            v-model:input="email"
            inputType="email"
            error=""
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Password"
            v-model:input="password"
            inputType="password"
            error=""
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Confirm password"
            v-model:input="confirmpassword"
            inputType="password"
            error=""
        />
    </div>

    <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="(!name || !email || !password || !confirmpassword)"
            :class="(!name || !email || !password || !confirmpassword) ? 'bg-gray-200' : 'bg-primary'"
            @click="$event => register()" 
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
            Sign up
        </button>
    </div>
</template>

<script setup>
const name = ref(null)
const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const errors = ref(null)
</script>