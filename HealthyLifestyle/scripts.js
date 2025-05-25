
const habits = [
    {
        title: "规律作息",
        description: "每日保持7-8小时睡眠，建议22:00前入睡，建立稳定的生物钟周期",
        details: [
            "生物钟调节：固定睡眠时间有助于调节身体的生物钟，提高睡眠质量",
            "夜间排毒：肝脏等器官在夜间进行排毒工作，早睡有助于身体新陈代谢",
            "避免熬夜：熬夜会导致内分泌失调、免疫力下降等问题",
            "午睡适度：午间小憩20-30分钟，可缓解疲劳但避免影响夜间睡眠"
        ],
        icon: "fa-moon-o"
    },
    {
        title: "均衡饮食",
        description: "遵循'三色原则'：每餐包含绿色蔬菜、优质蛋白和复合碳水，控制油盐摄入量",
        details: [
            "食物多样性：每日摄入不少于12种食物，每周不少于25种",
            "膳食纤维：多吃全谷物、蔬菜和水果，保证每日25-30g膳食纤维摄入",
            "优质蛋白：选择鱼、禽、蛋、瘦肉、豆类等优质蛋白质来源",
            "控糖限盐：每日食盐不超过5g，添加糖不超过25g",
            "饮水充足：成年人每日饮水1500-1700ml"
        ],
        icon: "fa-cutlery"
    },
    {
        title: "科学运动",
        description: "采用'3+2模式'：每周3次有氧运动（如快走/游泳），2次力量训练，每次不少于30分钟",
        details: [
            "有氧运动：快走、跑步、游泳、骑自行车等，提高心肺功能",
            "力量训练：哑铃、杠铃、俯卧撑等，增加肌肉量和基础代谢率",
            "柔韧性训练：瑜伽、拉伸等，提高关节灵活性和肌肉弹性",
            "运动频率：每周3-5次，每次30-60分钟",
            "循序渐进：根据自身情况逐渐增加运动强度和时间"
        ],
        icon: "fa-heartbeat"
    },
    {
        title: "水分管理",
        description: "执行'8杯水法则'：每天饮用1.5-2升水，少量多次，避免一次性大量饮水",
        details: [
            "饮水时间：晨起空腹一杯水，餐前半小时适量饮水",
            "运动补水：运动前后及过程中适当补水，避免脱水",
            "特殊人群：老年人、孕妇、儿童等需根据情况调整饮水量",
            "替代品：茶水、淡咖啡等也算入总饮水量，但应避免含糖饮料",
            "尿液颜色：正常尿液颜色应为淡黄色，深黄色提示缺水"
        ],
        icon: "fa-tint"
    },
    {
        title: "压力调节",
        description: "运用'番茄工作法'：每工作45分钟进行15分钟正念呼吸或轻度拉伸",
        details: [
            "正念冥想：每天10-15分钟正念冥想，减轻焦虑和压力",
            "时间管理：使用番茄工作法、四象限法则等提高工作效率",
            "兴趣爱好：培养兴趣爱好，如阅读、绘画、音乐等缓解压力",
            "社交支持：与家人、朋友保持良好沟通，分享感受",
            "心理咨询：必要时寻求专业心理咨询帮助"
        ],
        icon: "fa-balance-scale"
    },
    {
        title: "视力保护",
        description: "遵守'20-20-20原则'：每用眼20分钟，远眺20英尺外景物20秒",
        details: [
            "用眼环境：保持光线适宜，避免过强或过暗的光线",
            "屏幕距离：眼睛与电脑屏幕保持50-70厘米，手机屏幕保持30厘米以上",
            "眨眼频率：正常眨眼频率为每分钟15-20次，使用电子设备时易减少",
            "营养补充：多吃富含维生素A、C、E和叶黄素的食物",
            "定期检查：每年进行1-2次视力检查，及时发现问题"
        ],
        icon: "fa-eye"
    },
    {
        title: "社交健康",
        description: "保持'三三制'社交：每周至少3次深度交流，每次不少于30分钟",
        details: [
            "情感支持：良好的人际关系可以提供情感支持，降低抑郁风险",
            "沟通技巧：学习有效沟通技巧，如倾听、表达、反馈等",
            "社交多样性：参与不同类型的社交活动，扩大社交圈",
            "独处时间：平衡社交与独处，给自己留出思考和休息的时间",
            "线上社交：适度使用社交媒体，但不可替代面对面交流"
        ],
        icon: "fa-users"
    },
    {
        title: "定期体检",
        description: "建立'健康档案'：每年全面体检1次，重点指标每季度监测",
        details: [
            "基础体检：包括身高、体重、血压、血糖、血脂等常规检查",
            "专项检查：根据年龄、性别、家族病史等进行针对性检查",
            "肿瘤筛查：40岁以上人群建议每年进行肿瘤标志物筛查",
            "健康档案：建立个人健康档案，记录体检结果和就医情况",
            "及时干预：根据体检结果及时调整生活方式或进行治疗"
        ],
        icon: "fa-stethoscope"
    },
    {
        title: "卫生习惯",
        description: "做到'四勤准则'：勤洗手、勤通风、勤消毒、勤换贴身衣物",
        details: [
            "手卫生：用肥皂和流动水洗手，至少20秒，尤其是饭前便后",
            "通风换气：每天开窗通风2-3次，每次30分钟左右",
            "环境清洁：定期清洁和消毒常接触的物品和表面",
            "个人卫生：勤换洗衣物、被褥，保持皮肤清洁",
            "疾病预防：在流感等传染病高发期，避免前往人群密集场所"
        ],
        icon: "fa-medkit"
    },
    {
        title: "终身学习",
        description: "实践'5%进步法则'：每天学习健康知识不少于30分钟，持续优化生活方式",
        details: [
            "健康知识：学习营养学、运动科学、心理学等方面的知识",
            "信息甄别：通过可靠渠道获取健康信息，避免伪科学",
            "健康管理：学习自我健康管理方法，如饮食记录、运动监测等",
            "适应变化：根据自身情况和环境变化调整健康习惯",
            "分享传播：将健康知识分享给他人，共同促进健康"
        ],
        icon: "fa-book"
    }
];
//plz dont steal the code of Rox!!
let currentStep = 0;
let activeCardIndex = null;

// 初始化事件监听
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startBtn').addEventListener('click', startJourney);
});

// 开始展示健康习惯
function startJourney() {
    const homeScreen = document.getElementById('home');
    homeScreen.style.opacity = '0';
    
    setTimeout(() => {
        homeScreen.style.display = 'none';
        showNextCard();
    }, 500);
}

// 显示下一个健康习惯卡片
function showNextCard() {
    if (currentStep >= habits.length) {
        showCompletionMessage();
        return;
    }

    const container = document.getElementById('cards');
    const habit = habits[currentStep];

    // 创建卡片元素
    const card = document.createElement('div');
    card.className = 'card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    card.innerHTML = `
        <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa ${habit.icon} text-2xl text-primary"></i>
            </div>
            <h2>${habit.title}</h2>
        </div>
        <p>${habit.description}</p>
        <button onclick="handleNext()">
            ${currentStep < habits.length - 1 ? '下一个' : '完成'}
        </button>
    `;
//plz dont steal the code of Rox!!
    container.appendChild(card);
    
    // 触发重排后添加动画效果 the tag of rox
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 50);
    
    currentStep++;
}

// 处理下一步按钮点击
function handleNext() {
    showNextCard();
}

// 显示完成消息
function showCompletionMessage() {
    const container = document.getElementById('cards');
    
    const completionCard = document.createElement('div');
    completionCard.className = 'card';
    completionCard.style.backgroundColor = '#f8fcf8';
    completionCard.style.borderColor = '#d4edda';
    completionCard.innerHTML = `
        <div class="text-center mb-6">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <i class="fa fa-check text-3xl text-primary"></i>
            </div>
            <h2 style="display: inline-block;">恭喜你！</h2>
        </div>
        <p style="text-align: center;">你已经了解了所有十大健康生活习惯。</p>
        <div style="text-align: center;">
            <button onclick="showOverview()">总览</button>
        </div>
    `;
    
    container.appendChild(completionCard);
}//the tag of rox

// 显示总览视图
function showOverview() {
    document.getElementById('cards').style.display = 'none';
    const overviewContainer = document.getElementById('overview');
    overviewContainer.classList.remove('hidden');
    overviewContainer.innerHTML = `
        <h2>健康生活习惯总览</h2>
        <div id="thumbnails-container"></div>
        <button class="back-btn" onclick="backToCards()">返回</button>
    `;
    
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    
    habits.forEach((habit, index) => {
        const thumbnailCard = document.createElement('div');
        thumbnailCard.className = 'thumbnail-card';
        thumbnailCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <i class="fa ${habit.icon} text-lg text-primary"></i>
                </div>
                <h3>${habit.title}</h3>
            </div>
            <p>${habit.description}</p>
        `;
        
        thumbnailCard.addEventListener('click', () => showDetailCard(index));
        thumbnailsContainer.appendChild(thumbnailCard);
    });
}

// 显示详情卡片
function showDetailCard(index) {
    activeCardIndex = index;
    const overviewContainer = document.getElementById('overview');
    overviewContainer.innerHTML = `
        <button class="back-btn" onclick="showOverview()">返回总览</button>
        <div class="card detail-card" id="detail-card">
            <!-- 详情内容将由JavaScript填充 -->
        </div>
    `;
    
    const detailCard = document.getElementById('detail-card');
    const habit = habits[index];
    
    // 构建详细内容列表
    let detailsHTML = '<ul>';
    habit.details.forEach(detail => {
        detailsHTML += `<li>${detail}</li>`;
    });
    detailsHTML += '</ul>';
    
    detailCard.innerHTML = `
        <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa ${habit.icon} text-2xl text-primary"></i>
            </div>
            <h2>${habit.title}</h2>
        </div>
        <p>${habit.description}</p>
        <h3>详细说明：</h3>
        ${detailsHTML}
    `;
}

// 返回卡片视图
function backToCards() {
    document.getElementById('cards').style.display = 'block';
    document.getElementById('overview').classList.add('hidden');
}    