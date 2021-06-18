function  editElement (r,m,replacer){
    const matcher = new RegExp(m,'g');
  const result  = r.textContent.replace(matcher,replacer);
  r.textContent = result;
  }