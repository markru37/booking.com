const ListHotel = (props) => {
    return (
      <div className="page__hotel__block">
        <div className="hotel__block__container _container">
          <div className="hotel__block__body">
            {props.Name}
          </div>
        </div>
      </div>
    );
}

export default ListHotel;