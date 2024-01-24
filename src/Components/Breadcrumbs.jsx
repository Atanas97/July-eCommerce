import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = "";
    const crumbs = location.pathname
        .split("/")

        .filter((crumb) => crumb != "")

        .map((crumb) => {
            crumb.replace(/%[0-9A-Fa-f]{2}/g, " ");
            currentLink += `/${crumb}`;

            return (
                <div key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        });

    return <div className="flex gap-4">{crumbs}</div>;
};

export default Breadcrumbs;
