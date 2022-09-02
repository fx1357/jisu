const getD_Day = () => {
        let counter = document.querySelector('.counter');
        let today = new Date(), //현재 날짜 가져오기
            dday = new Date("May 27,2022, 22:00:00").getTime(), //디데이
            gap = today - dday,
            result = Math.floor(gap / (1000 * 60 * 60 * 24));

        return `D+${result}`

}
export default getD_Day;