/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/
import hoSo from '../../modules/ho-so/navigation/vertical/ho-so'
import trangChu from '../../modules/trang-chu/navigation/vertical/trang-chu'
import productList from '../../modules/product-list/navigation/vertical/product-list'
import detailPage from '../../modules/trang-chi-tiet/navigation/vertical/detail-page'

// Array of sections
export default [...trangChu, ...hoSo, ...productList, ...detailPage]
