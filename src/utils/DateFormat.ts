function dateFormat(date: Date): string {
  const dateFormat = date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '-')
    .replace(/\./g, '');

  return dateFormat;
}

export default dateFormat;
