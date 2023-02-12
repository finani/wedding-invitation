import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DateFormatter, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import { color } from 'src/common/utils/styles';

function CalendarCard() {
  const today = new Date();
  const weddingDate = new Date(2023, 3, 8);

  const seasonEmoji: Record<string, string> = {
    winter: '⛄️',
    spring: '🌸',
    summer: '🌻',
    autumn: '🍂',
  };

  const getSeason = (month: Date): string => {
    const monthNumber = month.getMonth();
    if (monthNumber >= 11 && monthNumber < 2) return 'winter';
    if (monthNumber >= 2 && monthNumber < 5) return 'spring';
    if (monthNumber >= 5 && monthNumber < 8) return 'summer';
    else return 'autumn';
  };

  const formatCaption: DateFormatter = (date, options) => {
    const season = getSeason(date);
    return (
      <>
        <span role="img" aria-label={season}>
          {seasonEmoji[season]}
          &nbsp; &nbsp;
        </span>
        {format(date, 'YYY년 MMMM', { locale: options?.locale })}
      </>
    );
  };

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    Math.abs((weddingDate.getTime() - today.getTime()) / oneDay),
  );

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Calendar</CS.CommonTitle>
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonSubTitleLong>
            2023년 4월 8일 오전 11시
          </CS.CommonSubTitleLong>
          <CS.CommonSubTitleLong>
            <a>인환 ❤ 채윤</a> 결혼식이 <a>{diffDays} 일</a> 남았습니다.
          </CS.CommonSubTitleLong>
        </CS.CommonTextContainer>
        <CS.CommonSubSubTitle>
          <S.CalendarContainer>
            <DayPicker
              mode="single"
              defaultMonth={weddingDate}
              modifiers={{ booked: weddingDate }}
              modifiersStyles={{
                booked: {
                  border: '2px solid',
                  color: color.wine,
                  fontSize: '1.1rem',
                },
              }}
              disableNavigation
              showOutsideDays
              locale={ko}
              styles={{
                caption: { color: color.wine },
                tfoot: { textAlign: 'center' },
              }}
              formatters={{ formatCaption }}
            />
          </S.CalendarContainer>
        </CS.CommonSubSubTitle>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default CalendarCard;
