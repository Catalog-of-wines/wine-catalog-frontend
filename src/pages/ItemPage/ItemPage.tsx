import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as selectedWineActions from '../../features/selectedWine/selectedWineSlice';


export const ItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { wineId = '0' } = useParams();
  const { item: wine} = useAppSelector(state => state.selectedWine);


  useEffect(() => {
    dispatch(selectedWineActions.initSelectedWine(wineId));
  }, [dispatch, wineId]);

  console.log('wineId>>>>>', wineId);
  console.log('selectedWine>>>>>', wine);
  
  return (
    <div>
      <div>Item Page</div>
      {wine && <div>{wine.name}</div>}
    </div>
  )
}