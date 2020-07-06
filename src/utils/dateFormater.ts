const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-br').format(new Date(value));

export default formatDate;
