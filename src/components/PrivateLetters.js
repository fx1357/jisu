import { React, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import image from '../assets/hand.jpg';

const style = {
  cardText: {
    whiteSpace: 'pre-wrap',
  },
};

const letters = {
  20220624: {
    imageUrl: '',
    text: '지수야\n매일 보는 일상에서도\n언제나 반가운 지수야\n생일 축하해!\n\n이제 지수 생일이 6월 24일인 걸 알았으니\n지수에 대한 건 거의 다 알게 됐네?\n앞으로 9,999개만 더 알면 되겠다ㅎ\n지수도 나에 대해 궁금한 게 있으면 언제든 물어봐도 돼 ㅎㅎ\n요즘 지수랑 함께 퇴근하는 시간이 즐겁고 재밌어\n여름방학까지 얼마 안 남았지만, 같이 출근하는 동안 재밌게 보내자~!!\n\n오늘은\n이 세상 누구보다 즐겁고 재밌는 하루를 보냈으면 좋겠어.\n내가 거기에 많이 기여하지 못할 수도 있지만, 노력할께 ㅋㅋㅋ\n다시 한번 생일 너무너무 축하하고\n\n오늘 하루 재밌게 보내자!\n지수가 지난번에 시 써준 거 좋아해서\n또 써봤어.\n이것도 생일선물이야.\n또다시 오글거리겠지만 재밌게 읽어줘 ㅎㅎ\n\n지금껏\n수고로운 일이\n야속한 일일지 모르지만\n사랑하는 이들이\n랑데부하는 것처럼\n해바라기가 햇살과 만나는 것처럼\n언제나\n제자리에서,\n나는 너와 함께할 거야.\n\nPS. 요즘 여름이라 컨디션 관리하기도 힘들고 체력적으로도 힘들 텐데\n내가 주는 레몬 나가 조금이라도 힘이 됐으면 좋겠어',
  },

  20220902: {
    imageUrl: image,
    text: '지수야 사랑해!\n벌써 우리가 만난지 100일이 되었네? ㅎㅎ\n길다면 길고 짧다면 짧은 시간을 함께 보내왔다는 것에 감사해\n어찌저찌 시간을 보내왔네.\n하루하루를 함께 보낸다는 것에 늘 감사하고\n앞으로도 함께하자~!\n\n-아침인사-\n\n짧은 인사로\n무력한 하루에\n작은 잎에 피어난다.\n\n너의 목소리로\n메마른 마음에\n싱그러운 기쁨이 피어난다.\n\n여러 날 지나\n아름송이\n풍성해 지면\n모아모아\n그대에게 선물해야지.',
  },
};

let date = 20220902;

function PrivateLetters(params) {
  const [letterDate, setletterDate] = useState(20220624);

  const handleDate = () => {
    date = letterDate == 20220624 ? 20220902 : 20220624;
    setletterDate(date);
  };

  return (
    <Card style={{ marginTop: '2px' }}>
      {letters[letterDate].imageUrl ? (
        <Card.Img variant="top" src={letters[letterDate].imageUrl} />
      ) : null}
      <Card.Body>
        <Card.Title>지수에게</Card.Title>
        <Card.Text style={style.cardText}>{letters[letterDate].text}</Card.Text>
        <br />
        <Card.Link
          className="font-weight-bold font-italic"
          onClick={handleDate}
        >
          {letterDate == 20220624 ? 20220902 : 20220624}의 편지로
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PrivateLetters;
