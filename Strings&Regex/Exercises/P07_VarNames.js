function varNames(text = new String()) {

  const regex = /\b_[A-Za-z0-9]+\b/gm;

  return text.match(regex).map(e => e.slice(1)).join(',');

}
