
export const handleUpdateBand = model => {
  this.props.updateBand({
    name: model.target.value
  });
};

export const handleUpdateCountry = model => {
  this.props.updateCountry({
    name: model.target.value
  });
};

export const handleUpdateGenre = model => {
  this.props.updateGenre({
    name: model.target.value
  });
};

export const handleUpdateLabel = model => {
  this.props.updateLabel({
    name: model.target.value
  });
};
