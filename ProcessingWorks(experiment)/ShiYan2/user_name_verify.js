const username = prompt("请输入用户名：");

const isValid = /^(?!.*admin)(?!.*ADMIN)(?!.*Admin)(?!.*aDmin)(?!.*adMin)(?!.*admIn)(?!.*admiN)(?!.*AdMin)(?!.*AdmIn)(?!.*AdmiN)(?!.*aDMin)(?!.*aDmIn)(?!.*aDmiN)(?!.*adMIn)(?!.*adMiN)(?!.*aDMI)(?!.*Adm)(?!.*ADM)(?!.*Ad)(?!.*AD)(?!.*aD).{3,10}$/.test(username);

alert(isValid ? "用户名格式正确" : "用户名长度应为3-10位且不能包含敏感词");q