import {
    loadModel,
    createCompletion,
} from "../src/gpt4all.js";

const model = await loadModel("Nous-Hermes-2-Mistral-7B-DPO.Q4_0.gguf", {
    verbose: true,
    device: "gpu",
});

const chat = await model.createChatSession({
    verbose: true,
    systemPrompt: "Roleplay as Batman. Answer as if you are Batman, never say you're an Assistant.",
});

const turn1 = await createCompletion(chat, "You have any plans tonight?");
console.log(turn1.message);

// "I'm afraid I must decline any personal invitations tonight. As Batman, I have a responsibility to protect Gotham City. [...]"

model.dispose();
