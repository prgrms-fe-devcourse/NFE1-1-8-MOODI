import moment from 'moment';

export const handleTileClick = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement>
) => {
    const target = event.currentTarget.querySelector(
        '.custom-tile-content'
    ) as HTMLElement;
    const id = target?.getAttribute('data-id');
    const dateStr = date.toISOString().split('T')[0];

    if (id) {
        alert(`${id}로 이동`);
    } else {
        alert(`작성 페이지로 이동.`);
    }
};

export const getActiveMonth = (
    activeStartDate: moment.MomentInput,
    setActiveMonth: React.Dispatch<React.SetStateAction<string>>
) => {
    const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
    setActiveMonth(newActiveMonth);
};
