import bot from "../bot";
import { getById } from "../db/getById";
import { arabicTodayName, formatDate, getTimeByHours } from "../util";
import { userNotRegisterMessage } from "./addTime";

export const showStatus = async (msg) => {
	const chatId = msg.chat.id;
	const {
		first_name: name,
		id,
	} = msg.from
	try {
		const user = await getById(id)
		if (user) {
			bot.sendMessage(chatId, statusMessage({
				name,
				todayTime: user.todayTime,
        allTime: user.allTime,
			}));
		}
		else {
			bot.sendMessage(chatId, userNotRegisterMessage)
		}
	} catch (error) {
		console.error('Sanity write error:', error);
		bot.sendMessage(chatId, 'شئ ما خاطئ من فضلك حاوب مجددا');
	}
}

const statusMessage = ({name, todayTime, allTime}) => {
	return `.

الإحصائيات حول الأخ ${name}
${formatDate(new Date())} : ${arabicTodayName}

الانجاز اليوم: ${getTimeByHours(todayTime)}

الانجاز منذ دخولك المجموعة: ${getTimeByHours(allTime)}

.`	
}