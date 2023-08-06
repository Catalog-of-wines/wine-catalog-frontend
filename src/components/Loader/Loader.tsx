import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Loader = React.memo<Props>(({ className }) => (
  <div className={classNames('loader', className)}>  </div>
));
