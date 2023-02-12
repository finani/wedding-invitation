const copyToClipboard = (copyString: string) => {
  if (!document.queryCommandSupported('copy')) {
    return alert('복사 기능이 지원되지 않는 브라우저입니다.');
  }

  const el = document.createElement('textarea');
  el.value = copyString;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection()?.rangeCount! > 0
      ? document.getSelection()?.getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(selected);
  }
  alert('복사되었습니다.\n( ' + copyString + ' )');
};

export default copyToClipboard;
