<template>
    <dialog open>
        <header>
            <slot>
                <h2>{{ title }}</h2>
            </slot>
        </header>
        <section>
            <slot></slot>
        </section>
    </dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>