const cases = {
  blueprint: {
    kicker: "Case 01 / 智能建造 AI",
    title: "工程图纸大模型匹配与 Prompt 优化",
    summary: "把工程图纸楼层匹配从依赖人工经验，拆解为可复用的大模型处理链路。",
    problem: "工程图纸楼层人工匹配效率低、规则不统一，需要兼顾建筑、结构、给排水、电气、暖通五大专业的识别与校验。",
    action:
      "横向测评 DeepSeek、Kimi、通义千问、GPT 等模型，基于 Windsurf 搭建“图纸预处理-专业识别-楼层匹配-结果校验”的标准化处理链路，并持续优化 Prompt、图纸命名规则与模型推理逻辑。",
    result: "模型识别准确率由 52% 提升至 90%，处理效率提升 42%，沉淀垂直智能建造场景的大模型落地方法。",
    tools: ["DeepSeek", "Kimi", "通义千问", "GPT", "Windsurf", "Prompt 评估"],
    transfer: "适用于 AI 应用运营中的模型评估、场景拆解、Prompt 调试、规则沉淀和垂直业务流程标准化。"
  },
  feedback: {
    kicker: "Case 02 / 客户反馈 AI",
    title: "小米汽车 2000+ 条客户反馈自动化分析",
    summary: "把大量非结构化反馈转成问题分类、门店痛点和报告素材，支撑服务整改。",
    problem: "2000+ 条客户反馈需要人工分类、需求拆解和报告沉淀，处理周期长，重复环节多。",
    action:
      "基于前期手动处理经验，识别反馈分类、需求拆解、报告素材整理等高频重复环节，主动搭建飞书多维表格 AI 自动化链路，覆盖反馈收集、问题分类、需求拆解、素材生成和报告沉淀。",
    result: "全量数据处理周期从 22 个工作日压缩至 10 个工作日，处理效率提升 55%。",
    tools: ["飞书多维表格", "AI 分类", "需求拆解", "运营报告", "客户反馈分析"],
    transfer: "适用于 AI 应用运营中的用户反馈分析、VOC 体系、数据标签化和跨团队报告交付。"
  },
  content: {
    kicker: "Case 03 / 产品内容增长",
    title: "BIMBase 产品教育、UGC 与活动增长",
    summary: "围绕产品学习路径、用户参与和产品曝光，搭建内容运营与活动增长流程。",
    problem: "BIMBase 用户学习路径不清晰，资料分散，产品认知和用户参与需要被系统提升。",
    action:
      "参与 BIMBase 教学视频体系建设，使用智谱清言辅助课程大纲、脚本、标题和 FAQ 设计；独立负责公众号运营，搭建“选题-检索-AI初稿-校对-发布-复盘”的内容 SOP；参与创作者激励计划和建模大赛执行。",
    result: "产出 20+ 节标准化教学内容，累计播放量 3000+；策划涨粉活动，单月新增微信用户 300+。",
    tools: ["BIMBase", "ChatGPT", "Kimi", "智谱清言", "公众号", "UGC 流程"],
    transfer: "适用于 AI 产品运营中的产品教育、内容增长、用户激励、活动执行和内容 SOP 搭建。"
  },
  matrix: {
    kicker: "Case 04 / 内容矩阵自动化",
    title: "AI 辅助产品宣传与自媒体矩阵运营",
    summary: "用 RPA 和大模型把产品宣传从单平台手工发布，升级为多平台批量分发链路。",
    problem: "智能建造产品宣传需要覆盖多个内容平台，单篇内容生产、适配和发布成本高，分发稳定性不足。",
    action:
      "使用影刀 RPA 搭建 CSDN、知乎、今日头条、小红书、公众号等平台的自媒体矩阵分发流程，结合多模态大模型辅助完成选题拆解、平台适配版文案生成、标题优化与配图提示词设计。",
    result: "形成“选题策划-内容生成-平台适配-批量发布-数据回收”的 AI 内容运营链路，单篇推文生产与发布效率提升 70%+。",
    tools: ["影刀 RPA", "多模态大模型", "CSDN", "知乎", "小红书", "公众号"],
    transfer: "适用于 AI 自动化运营、内容矩阵、批量分发、跨平台适配和增长数据回收。"
  }
};

const toast = document.querySelector(".toast");
const modal = document.querySelector(".case-modal");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalProblem = document.querySelector("#modal-problem");
const modalAction = document.querySelector("#modal-action");
const modalResult = document.querySelector("#modal-result");
const modalTools = document.querySelector("#modal-tools");
const modalTransfer = document.querySelector("#modal-transfer");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    document.body.removeChild(field);
  }
  showToast("微信号已复制");
}

function openCase(caseId) {
  const item = cases[caseId];
  if (!item) return;

  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalProblem.textContent = item.problem;
  modalAction.textContent = item.action;
  modalResult.textContent = item.result;
  modalTransfer.textContent = item.transfer;
  modalTools.replaceChildren(
    ...item.tools.map((tool) => {
      const tag = document.createElement("span");
      tag.textContent = tool;
      return tag;
    })
  );

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeCase() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => openCase(button.dataset.case));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeCase);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeCase();
  }
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
