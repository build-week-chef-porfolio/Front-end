import React from 'react';
import { Image, Header } from 'semantic-ui-react'; 
import SingleMainMenu from '../Menu/SingleMenu';

const SingleHeader = () => {

    return (
        <div className="singleheaderWrapper">
            <SingleMainMenu />
            <div className='singleheaderH1'>
                <h1>Get Rop Rated Chefs For Your Next Social Gathering</h1>
            </div>
            <div className="singletallImages">
                <Image
                 src='https://s3-alpha-sig.figma.com/img/e16c/532a/c3bd6899585d9436e1eaff29f8b44297?Expires=1565568000&Signature=KNtObQRcGkczXnjVJNWowGXRQNvMAmeUBAIy8sjF~RT2K4DlG2KSTUxJOkxRpg18hJ2cAP1nBLqEL~3T05cTZUUS3Q7hEefwRh-vYmgA5oUPo5p-ZZEnQmff8Eycnu9BZldE2GORm9~h10IMCJi8k-WqJBJ1NRwa73r49MkWH4fh6~YxnKfNQpEoKrjzr5uF0cGMJEEBYjhTVfYycsu2z7RHnzvgLhzbsD9qYsfpYTtvBeGVdu7~4Y5ZlTcCergQ7xF2CG1q6a7AHsMhvqC12knZJm7Aoy77Tw5E7~PX9lT3PPvr8Wh58elcJoXXflmxuP8rZALoUY1G6NejnC00Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                 />
                <img src='https://s3-alpha-sig.figma.com/img/e16c/532a/c3bd6899585d9436e1eaff29f8b44297?Expires=1565568000&Signature=KNtObQRcGkczXnjVJNWowGXRQNvMAmeUBAIy8sjF~RT2K4DlG2KSTUxJOkxRpg18hJ2cAP1nBLqEL~3T05cTZUUS3Q7hEefwRh-vYmgA5oUPo5p-ZZEnQmff8Eycnu9BZldE2GORm9~h10IMCJi8k-WqJBJ1NRwa73r49MkWH4fh6~YxnKfNQpEoKrjzr5uF0cGMJEEBYjhTVfYycsu2z7RHnzvgLhzbsD9qYsfpYTtvBeGVdu7~4Y5ZlTcCergQ7xF2CG1q6a7AHsMhvqC12knZJm7Aoy77Tw5E7~PX9lT3PPvr8Wh58elcJoXXflmxuP8rZALoUY1G6NejnC00Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
                <img src='https://s3-alpha-sig.figma.com/img/e16c/532a/c3bd6899585d9436e1eaff29f8b44297?Expires=1565568000&Signature=KNtObQRcGkczXnjVJNWowGXRQNvMAmeUBAIy8sjF~RT2K4DlG2KSTUxJOkxRpg18hJ2cAP1nBLqEL~3T05cTZUUS3Q7hEefwRh-vYmgA5oUPo5p-ZZEnQmff8Eycnu9BZldE2GORm9~h10IMCJi8k-WqJBJ1NRwa73r49MkWH4fh6~YxnKfNQpEoKrjzr5uF0cGMJEEBYjhTVfYycsu2z7RHnzvgLhzbsD9qYsfpYTtvBeGVdu7~4Y5ZlTcCergQ7xF2CG1q6a7AHsMhvqC12knZJm7Aoy77Tw5E7~PX9lT3PPvr8Wh58elcJoXXflmxuP8rZALoUY1G6NejnC00Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
            </div>
            <div className='singlechefImages'>
                <h2>Top Rated Chefs From All Over The World</h2>
                <div className='singlechefImagesWrapper'>
                    <img src='https://s3-alpha-sig.figma.com/img/2b08/465d/14f827b7b9e96473b3cb1753dee8b6ff?Expires=1565568000&Signature=NhP9FO89-sxkyQB19khISSPOnoBvHT~8v6EpkKRZO8p8sN0Fuh0pNKiygbXIuuig-Ym8pu8U7XsLy9nPh~XLNteNUPDkMVtwFNi1Vht9A~YW83cDNgAg4s1tKZegacqKymNdbwm63bIp49ZSVouywg9Jt98R018EB1NRch4HHgMxGoO0971QrxMSZoDhf-1KXXkKmML6uVRUZKPvzLTyokpWMVNfaDhjy~oOy8c5zXBcu2y2ZZQSKcmhPP41Luj1xQBGdgZhAxPjkezDdRtE0xgmsAMXPoers9qCc6ohGbVdaM~i~Nt-RbbL-yGZDjc0YEjKHV53VnKe1jCJfOLzEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
                    />
                    <img src='https://s3-alpha-sig.figma.com/img/2b08/465d/14f827b7b9e96473b3cb1753dee8b6ff?Expires=1565568000&Signature=NhP9FO89-sxkyQB19khISSPOnoBvHT~8v6EpkKRZO8p8sN0Fuh0pNKiygbXIuuig-Ym8pu8U7XsLy9nPh~XLNteNUPDkMVtwFNi1Vht9A~YW83cDNgAg4s1tKZegacqKymNdbwm63bIp49ZSVouywg9Jt98R018EB1NRch4HHgMxGoO0971QrxMSZoDhf-1KXXkKmML6uVRUZKPvzLTyokpWMVNfaDhjy~oOy8c5zXBcu2y2ZZQSKcmhPP41Luj1xQBGdgZhAxPjkezDdRtE0xgmsAMXPoers9qCc6ohGbVdaM~i~Nt-RbbL-yGZDjc0YEjKHV53VnKe1jCJfOLzEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
                    />
                    <img src='https://s3-alpha-sig.figma.com/img/2b08/465d/14f827b7b9e96473b3cb1753dee8b6ff?Expires=1565568000&Signature=NhP9FO89-sxkyQB19khISSPOnoBvHT~8v6EpkKRZO8p8sN0Fuh0pNKiygbXIuuig-Ym8pu8U7XsLy9nPh~XLNteNUPDkMVtwFNi1Vht9A~YW83cDNgAg4s1tKZegacqKymNdbwm63bIp49ZSVouywg9Jt98R018EB1NRch4HHgMxGoO0971QrxMSZoDhf-1KXXkKmML6uVRUZKPvzLTyokpWMVNfaDhjy~oOy8c5zXBcu2y2ZZQSKcmhPP41Luj1xQBGdgZhAxPjkezDdRtE0xgmsAMXPoers9qCc6ohGbVdaM~i~Nt-RbbL-yGZDjc0YEjKHV53VnKe1jCJfOLzEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleHeader