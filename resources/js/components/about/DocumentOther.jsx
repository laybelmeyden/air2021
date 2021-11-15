import React from "react";
import Footer from "../footer/Footer";
import DocumentLink from "./DocumentLink";
import SideBar from "./SideBar";
import { Helmet } from "react-helmet";

const DocumentOther = () => {
    return (
        <div>
            <div className="container grid__item">
                <Helmet>
                    <title>АИР - Отчеты и прочие документы</title>
                    <meta name="description" content="Отчеты и прочие документы" />
                </Helmet>
                <div>
                    <SideBar />
                </div>
                <div className="item__document">
                    <DocumentLink />
                    <div className="item">
                        <a href="">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="47"
                                    height="47"
                                    viewBox="0 0 47 47"
                                    fill="none"
                                >
                                    <circle cx="23.5" cy="23.5" r="23.5" />
                                    <path
                                        d="M28.7365 37C24.9844 37 21.2323 37 17.4795 37C16.6589 36.6442 16.4595 36.3313 16.4595 35.3983C16.4595 34.8449 16.4595 34.2916 16.4595 33.7382C16.4595 33.637 16.4595 33.5357 16.4595 33.4176C15.7443 33.4176 15.0666 33.4183 14.3888 33.4176C13.5097 33.4169 13 32.8902 13 31.9783C13 25.1355 13 18.2927 13.0007 11.4498C13.0007 11.3275 13.0027 11.203 13.0231 11.0828C13.1252 10.4992 13.5015 10.1807 14.0159 10C19.5168 10 25.0177 10 30.5193 10C31.3379 10.353 31.5393 10.6687 31.5393 11.6017C31.5393 12.1551 31.5393 12.7084 31.5393 13.2618C31.5393 13.363 31.5393 13.4643 31.5393 13.555C31.5931 13.5698 31.6087 13.5782 31.6251 13.5782C32.2871 13.5796 32.9486 13.5803 33.6107 13.5817C34.4905 13.5831 34.9988 14.1091 34.9988 15.0217C34.9995 20.1348 35.0022 25.2473 34.9961 30.3604C34.9947 31.3096 34.6484 32.1245 33.9836 32.7798C32.8894 33.8577 31.7952 34.9363 30.6792 35.9896C30.3839 36.268 30.0239 36.486 29.666 36.6752C29.3775 36.8277 29.0474 36.8952 28.7365 37ZM28.7133 35.9924C28.7133 35.868 28.7133 35.7646 28.7133 35.6612C28.7133 34.6684 28.7065 33.6756 28.7154 32.6828C28.7256 31.562 29.4489 30.8273 30.5322 30.8237C31.542 30.8209 32.5519 30.823 33.5617 30.823C34.0475 30.823 34.0489 30.823 34.0489 30.3098C34.0496 25.2311 34.0496 20.1531 34.0496 15.0745C34.0496 14.6329 33.9693 14.5478 33.5487 14.5478C28.3377 14.5471 23.1274 14.5471 17.9164 14.5478C17.4802 14.5478 17.3992 14.6322 17.3992 15.0885C17.3992 21.8891 17.3992 28.6898 17.3992 35.4904C17.3992 35.9516 17.4666 36.0198 17.9198 36.0198C21.3568 36.0198 24.7938 36.0205 28.2309 36.0191C28.382 36.0198 28.5323 36.003 28.7133 35.9924ZM30.5642 13.5817C30.5833 13.5255 30.5935 13.5086 30.5935 13.4924C30.5962 12.842 30.5989 12.1923 30.5996 11.542C30.6003 11.0392 30.5418 10.9787 30.06 10.9787C24.8741 10.9787 19.6883 10.9787 14.5025 10.9787C13.9928 10.9787 13.9486 11.0245 13.9486 11.5497C13.9486 18.3243 13.9486 25.0996 13.9486 31.8742C13.9486 31.953 13.9486 32.0324 13.9513 32.1112C13.9581 32.3102 14.067 32.4374 14.2493 32.4402C14.9768 32.4508 15.7042 32.4445 16.4602 32.4445C16.4602 32.3109 16.4602 32.1991 16.4602 32.088C16.4602 26.4116 16.4602 20.7346 16.4602 15.0583C16.4602 14.0859 16.9481 13.5817 17.8864 13.581C22.0114 13.581 26.1364 13.581 30.2614 13.581C30.3614 13.5817 30.4621 13.5817 30.5642 13.5817ZM33.5474 31.8658C33.5378 31.844 33.5283 31.8229 33.5188 31.8011C33.4616 31.7983 33.4052 31.7927 33.348 31.7927C32.4056 31.792 31.4638 31.7898 30.5213 31.7934C29.9742 31.7955 29.6558 32.1302 29.6544 32.699C29.6524 33.5863 29.6537 34.4737 29.6544 35.3617C29.6544 35.4264 29.6612 35.4918 29.6701 35.6437C30.9977 34.3499 32.2729 33.1082 33.5474 31.8658Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.75 18.1274C27.1919 18.1274 28.6338 18.1267 30.0757 18.1281C30.1771 18.1281 30.2819 18.1246 30.3792 18.1478C30.6146 18.2041 30.7493 18.3707 30.75 18.6168C30.7507 18.8615 30.6214 19.0316 30.3839 19.0893C30.2948 19.1111 30.1989 19.1118 30.1063 19.1118C27.1885 19.1132 24.2713 19.1125 21.3535 19.1125C21.2772 19.1125 21.1997 19.1153 21.1248 19.1034C20.8758 19.0633 20.7002 18.8615 20.6989 18.6217C20.6975 18.3728 20.8839 18.1647 21.1446 18.1323C21.2283 18.1218 21.314 18.1267 21.3984 18.1267C22.8498 18.1274 24.2999 18.1274 25.75 18.1274Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7329 25.6115C24.2406 25.6115 22.7477 25.6122 21.2554 25.6108C20.8791 25.6101 20.6376 25.3513 20.7138 25.0293C20.7648 24.8127 20.8955 24.6749 21.1173 24.651C21.2017 24.6419 21.2867 24.6433 21.3711 24.6433C24.2713 24.6426 27.1714 24.6426 30.0722 24.6433C30.5309 24.6433 30.7507 24.7973 30.7534 25.1214C30.7568 25.4484 30.5336 25.6115 30.0831 25.6115C28.6331 25.6115 27.183 25.6115 25.7329 25.6115Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7042 22.3574C24.2711 22.3574 22.838 22.3574 21.4043 22.3574C21.3192 22.3574 21.2342 22.3602 21.1498 22.3525C20.8871 22.3293 20.7007 22.1296 20.6987 21.8751C20.6973 21.6121 20.8967 21.4061 21.1695 21.3899C21.2206 21.3871 21.2716 21.3885 21.322 21.3885C24.2561 21.3885 27.1903 21.3885 30.1245 21.3885C30.2007 21.3885 30.2783 21.3829 30.3531 21.3941C30.5811 21.4286 30.7498 21.6339 30.7519 21.8694C30.7532 22.1071 30.5899 22.3103 30.3579 22.3455C30.266 22.3595 30.1721 22.3567 30.0789 22.3567C28.6213 22.3574 27.1631 22.3574 25.7042 22.3574Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M23.6915 28.8726C22.9117 28.8726 22.1312 28.8733 21.3514 28.8719C21.2588 28.8719 21.1629 28.8733 21.0737 28.8515C20.839 28.7931 20.7138 28.6258 20.7015 28.3804C20.6906 28.1603 20.8512 27.962 21.0724 27.9086C21.1459 27.891 21.2234 27.8882 21.299 27.8882C22.8933 27.8868 24.487 27.8868 26.0813 27.8889C26.165 27.8889 26.2521 27.8966 26.3317 27.9205C26.5426 27.9852 26.6556 28.1392 26.661 28.3663C26.6665 28.6054 26.5535 28.7706 26.3324 28.8388C26.2371 28.8684 26.1323 28.8719 26.0316 28.8719C25.2511 28.8733 24.4713 28.8726 23.6915 28.8726Z"
                                        fill="#F7FAFC"
                                    />
                                </svg>
                                <p>Упрощенная бухгалтерская (финансовая) отчетность 2020 г АНО АИР.pdf</p>
                            </div>
                        </a>
                        <a href="">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="47"
                                    height="47"
                                    viewBox="0 0 47 47"
                                    fill="none"
                                >
                                    <circle cx="23.5" cy="23.5" r="23.5" />
                                    <path
                                        d="M28.7365 37C24.9844 37 21.2323 37 17.4795 37C16.6589 36.6442 16.4595 36.3313 16.4595 35.3983C16.4595 34.8449 16.4595 34.2916 16.4595 33.7382C16.4595 33.637 16.4595 33.5357 16.4595 33.4176C15.7443 33.4176 15.0666 33.4183 14.3888 33.4176C13.5097 33.4169 13 32.8902 13 31.9783C13 25.1355 13 18.2927 13.0007 11.4498C13.0007 11.3275 13.0027 11.203 13.0231 11.0828C13.1252 10.4992 13.5015 10.1807 14.0159 10C19.5168 10 25.0177 10 30.5193 10C31.3379 10.353 31.5393 10.6687 31.5393 11.6017C31.5393 12.1551 31.5393 12.7084 31.5393 13.2618C31.5393 13.363 31.5393 13.4643 31.5393 13.555C31.5931 13.5698 31.6087 13.5782 31.6251 13.5782C32.2871 13.5796 32.9486 13.5803 33.6107 13.5817C34.4905 13.5831 34.9988 14.1091 34.9988 15.0217C34.9995 20.1348 35.0022 25.2473 34.9961 30.3604C34.9947 31.3096 34.6484 32.1245 33.9836 32.7798C32.8894 33.8577 31.7952 34.9363 30.6792 35.9896C30.3839 36.268 30.0239 36.486 29.666 36.6752C29.3775 36.8277 29.0474 36.8952 28.7365 37ZM28.7133 35.9924C28.7133 35.868 28.7133 35.7646 28.7133 35.6612C28.7133 34.6684 28.7065 33.6756 28.7154 32.6828C28.7256 31.562 29.4489 30.8273 30.5322 30.8237C31.542 30.8209 32.5519 30.823 33.5617 30.823C34.0475 30.823 34.0489 30.823 34.0489 30.3098C34.0496 25.2311 34.0496 20.1531 34.0496 15.0745C34.0496 14.6329 33.9693 14.5478 33.5487 14.5478C28.3377 14.5471 23.1274 14.5471 17.9164 14.5478C17.4802 14.5478 17.3992 14.6322 17.3992 15.0885C17.3992 21.8891 17.3992 28.6898 17.3992 35.4904C17.3992 35.9516 17.4666 36.0198 17.9198 36.0198C21.3568 36.0198 24.7938 36.0205 28.2309 36.0191C28.382 36.0198 28.5323 36.003 28.7133 35.9924ZM30.5642 13.5817C30.5833 13.5255 30.5935 13.5086 30.5935 13.4924C30.5962 12.842 30.5989 12.1923 30.5996 11.542C30.6003 11.0392 30.5418 10.9787 30.06 10.9787C24.8741 10.9787 19.6883 10.9787 14.5025 10.9787C13.9928 10.9787 13.9486 11.0245 13.9486 11.5497C13.9486 18.3243 13.9486 25.0996 13.9486 31.8742C13.9486 31.953 13.9486 32.0324 13.9513 32.1112C13.9581 32.3102 14.067 32.4374 14.2493 32.4402C14.9768 32.4508 15.7042 32.4445 16.4602 32.4445C16.4602 32.3109 16.4602 32.1991 16.4602 32.088C16.4602 26.4116 16.4602 20.7346 16.4602 15.0583C16.4602 14.0859 16.9481 13.5817 17.8864 13.581C22.0114 13.581 26.1364 13.581 30.2614 13.581C30.3614 13.5817 30.4621 13.5817 30.5642 13.5817ZM33.5474 31.8658C33.5378 31.844 33.5283 31.8229 33.5188 31.8011C33.4616 31.7983 33.4052 31.7927 33.348 31.7927C32.4056 31.792 31.4638 31.7898 30.5213 31.7934C29.9742 31.7955 29.6558 32.1302 29.6544 32.699C29.6524 33.5863 29.6537 34.4737 29.6544 35.3617C29.6544 35.4264 29.6612 35.4918 29.6701 35.6437C30.9977 34.3499 32.2729 33.1082 33.5474 31.8658Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.75 18.1274C27.1919 18.1274 28.6338 18.1267 30.0757 18.1281C30.1771 18.1281 30.2819 18.1246 30.3792 18.1478C30.6146 18.2041 30.7493 18.3707 30.75 18.6168C30.7507 18.8615 30.6214 19.0316 30.3839 19.0893C30.2948 19.1111 30.1989 19.1118 30.1063 19.1118C27.1885 19.1132 24.2713 19.1125 21.3535 19.1125C21.2772 19.1125 21.1997 19.1153 21.1248 19.1034C20.8758 19.0633 20.7002 18.8615 20.6989 18.6217C20.6975 18.3728 20.8839 18.1647 21.1446 18.1323C21.2283 18.1218 21.314 18.1267 21.3984 18.1267C22.8498 18.1274 24.2999 18.1274 25.75 18.1274Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7329 25.6115C24.2406 25.6115 22.7477 25.6122 21.2554 25.6108C20.8791 25.6101 20.6376 25.3513 20.7138 25.0293C20.7648 24.8127 20.8955 24.6749 21.1173 24.651C21.2017 24.6419 21.2867 24.6433 21.3711 24.6433C24.2713 24.6426 27.1714 24.6426 30.0722 24.6433C30.5309 24.6433 30.7507 24.7973 30.7534 25.1214C30.7568 25.4484 30.5336 25.6115 30.0831 25.6115C28.6331 25.6115 27.183 25.6115 25.7329 25.6115Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7042 22.3574C24.2711 22.3574 22.838 22.3574 21.4043 22.3574C21.3192 22.3574 21.2342 22.3602 21.1498 22.3525C20.8871 22.3293 20.7007 22.1296 20.6987 21.8751C20.6973 21.6121 20.8967 21.4061 21.1695 21.3899C21.2206 21.3871 21.2716 21.3885 21.322 21.3885C24.2561 21.3885 27.1903 21.3885 30.1245 21.3885C30.2007 21.3885 30.2783 21.3829 30.3531 21.3941C30.5811 21.4286 30.7498 21.6339 30.7519 21.8694C30.7532 22.1071 30.5899 22.3103 30.3579 22.3455C30.266 22.3595 30.1721 22.3567 30.0789 22.3567C28.6213 22.3574 27.1631 22.3574 25.7042 22.3574Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M23.6915 28.8726C22.9117 28.8726 22.1312 28.8733 21.3514 28.8719C21.2588 28.8719 21.1629 28.8733 21.0737 28.8515C20.839 28.7931 20.7138 28.6258 20.7015 28.3804C20.6906 28.1603 20.8512 27.962 21.0724 27.9086C21.1459 27.891 21.2234 27.8882 21.299 27.8882C22.8933 27.8868 24.487 27.8868 26.0813 27.8889C26.165 27.8889 26.2521 27.8966 26.3317 27.9205C26.5426 27.9852 26.6556 28.1392 26.661 28.3663C26.6665 28.6054 26.5535 28.7706 26.3324 28.8388C26.2371 28.8684 26.1323 28.8719 26.0316 28.8719C25.2511 28.8733 24.4713 28.8726 23.6915 28.8726Z"
                                        fill="#F7FAFC"
                                    />
                                </svg>
                                <p>Сведения о персональном составе руководящих органов некоммерческой организации</p>
                            </div>
                        </a>
                        <a href="">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="47"
                                    height="47"
                                    viewBox="0 0 47 47"
                                    fill="none"
                                >
                                    <circle cx="23.5" cy="23.5" r="23.5" />
                                    <path
                                        d="M28.7365 37C24.9844 37 21.2323 37 17.4795 37C16.6589 36.6442 16.4595 36.3313 16.4595 35.3983C16.4595 34.8449 16.4595 34.2916 16.4595 33.7382C16.4595 33.637 16.4595 33.5357 16.4595 33.4176C15.7443 33.4176 15.0666 33.4183 14.3888 33.4176C13.5097 33.4169 13 32.8902 13 31.9783C13 25.1355 13 18.2927 13.0007 11.4498C13.0007 11.3275 13.0027 11.203 13.0231 11.0828C13.1252 10.4992 13.5015 10.1807 14.0159 10C19.5168 10 25.0177 10 30.5193 10C31.3379 10.353 31.5393 10.6687 31.5393 11.6017C31.5393 12.1551 31.5393 12.7084 31.5393 13.2618C31.5393 13.363 31.5393 13.4643 31.5393 13.555C31.5931 13.5698 31.6087 13.5782 31.6251 13.5782C32.2871 13.5796 32.9486 13.5803 33.6107 13.5817C34.4905 13.5831 34.9988 14.1091 34.9988 15.0217C34.9995 20.1348 35.0022 25.2473 34.9961 30.3604C34.9947 31.3096 34.6484 32.1245 33.9836 32.7798C32.8894 33.8577 31.7952 34.9363 30.6792 35.9896C30.3839 36.268 30.0239 36.486 29.666 36.6752C29.3775 36.8277 29.0474 36.8952 28.7365 37ZM28.7133 35.9924C28.7133 35.868 28.7133 35.7646 28.7133 35.6612C28.7133 34.6684 28.7065 33.6756 28.7154 32.6828C28.7256 31.562 29.4489 30.8273 30.5322 30.8237C31.542 30.8209 32.5519 30.823 33.5617 30.823C34.0475 30.823 34.0489 30.823 34.0489 30.3098C34.0496 25.2311 34.0496 20.1531 34.0496 15.0745C34.0496 14.6329 33.9693 14.5478 33.5487 14.5478C28.3377 14.5471 23.1274 14.5471 17.9164 14.5478C17.4802 14.5478 17.3992 14.6322 17.3992 15.0885C17.3992 21.8891 17.3992 28.6898 17.3992 35.4904C17.3992 35.9516 17.4666 36.0198 17.9198 36.0198C21.3568 36.0198 24.7938 36.0205 28.2309 36.0191C28.382 36.0198 28.5323 36.003 28.7133 35.9924ZM30.5642 13.5817C30.5833 13.5255 30.5935 13.5086 30.5935 13.4924C30.5962 12.842 30.5989 12.1923 30.5996 11.542C30.6003 11.0392 30.5418 10.9787 30.06 10.9787C24.8741 10.9787 19.6883 10.9787 14.5025 10.9787C13.9928 10.9787 13.9486 11.0245 13.9486 11.5497C13.9486 18.3243 13.9486 25.0996 13.9486 31.8742C13.9486 31.953 13.9486 32.0324 13.9513 32.1112C13.9581 32.3102 14.067 32.4374 14.2493 32.4402C14.9768 32.4508 15.7042 32.4445 16.4602 32.4445C16.4602 32.3109 16.4602 32.1991 16.4602 32.088C16.4602 26.4116 16.4602 20.7346 16.4602 15.0583C16.4602 14.0859 16.9481 13.5817 17.8864 13.581C22.0114 13.581 26.1364 13.581 30.2614 13.581C30.3614 13.5817 30.4621 13.5817 30.5642 13.5817ZM33.5474 31.8658C33.5378 31.844 33.5283 31.8229 33.5188 31.8011C33.4616 31.7983 33.4052 31.7927 33.348 31.7927C32.4056 31.792 31.4638 31.7898 30.5213 31.7934C29.9742 31.7955 29.6558 32.1302 29.6544 32.699C29.6524 33.5863 29.6537 34.4737 29.6544 35.3617C29.6544 35.4264 29.6612 35.4918 29.6701 35.6437C30.9977 34.3499 32.2729 33.1082 33.5474 31.8658Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.75 18.1274C27.1919 18.1274 28.6338 18.1267 30.0757 18.1281C30.1771 18.1281 30.2819 18.1246 30.3792 18.1478C30.6146 18.2041 30.7493 18.3707 30.75 18.6168C30.7507 18.8615 30.6214 19.0316 30.3839 19.0893C30.2948 19.1111 30.1989 19.1118 30.1063 19.1118C27.1885 19.1132 24.2713 19.1125 21.3535 19.1125C21.2772 19.1125 21.1997 19.1153 21.1248 19.1034C20.8758 19.0633 20.7002 18.8615 20.6989 18.6217C20.6975 18.3728 20.8839 18.1647 21.1446 18.1323C21.2283 18.1218 21.314 18.1267 21.3984 18.1267C22.8498 18.1274 24.2999 18.1274 25.75 18.1274Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7329 25.6115C24.2406 25.6115 22.7477 25.6122 21.2554 25.6108C20.8791 25.6101 20.6376 25.3513 20.7138 25.0293C20.7648 24.8127 20.8955 24.6749 21.1173 24.651C21.2017 24.6419 21.2867 24.6433 21.3711 24.6433C24.2713 24.6426 27.1714 24.6426 30.0722 24.6433C30.5309 24.6433 30.7507 24.7973 30.7534 25.1214C30.7568 25.4484 30.5336 25.6115 30.0831 25.6115C28.6331 25.6115 27.183 25.6115 25.7329 25.6115Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M25.7042 22.3574C24.2711 22.3574 22.838 22.3574 21.4043 22.3574C21.3192 22.3574 21.2342 22.3602 21.1498 22.3525C20.8871 22.3293 20.7007 22.1296 20.6987 21.8751C20.6973 21.6121 20.8967 21.4061 21.1695 21.3899C21.2206 21.3871 21.2716 21.3885 21.322 21.3885C24.2561 21.3885 27.1903 21.3885 30.1245 21.3885C30.2007 21.3885 30.2783 21.3829 30.3531 21.3941C30.5811 21.4286 30.7498 21.6339 30.7519 21.8694C30.7532 22.1071 30.5899 22.3103 30.3579 22.3455C30.266 22.3595 30.1721 22.3567 30.0789 22.3567C28.6213 22.3574 27.1631 22.3574 25.7042 22.3574Z"
                                        fill="#F7FAFC"
                                    />
                                    <path
                                        d="M23.6915 28.8726C22.9117 28.8726 22.1312 28.8733 21.3514 28.8719C21.2588 28.8719 21.1629 28.8733 21.0737 28.8515C20.839 28.7931 20.7138 28.6258 20.7015 28.3804C20.6906 28.1603 20.8512 27.962 21.0724 27.9086C21.1459 27.891 21.2234 27.8882 21.299 27.8882C22.8933 27.8868 24.487 27.8868 26.0813 27.8889C26.165 27.8889 26.2521 27.8966 26.3317 27.9205C26.5426 27.9852 26.6556 28.1392 26.661 28.3663C26.6665 28.6054 26.5535 28.7706 26.3324 28.8388C26.2371 28.8684 26.1323 28.8719 26.0316 28.8719C25.2511 28.8733 24.4713 28.8726 23.6915 28.8726Z"
                                        fill="#F7FAFC"
                                    />
                                </svg>
                                <p>Отчет о целях расходования некоммерческой организацией денежных средств и использования</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default DocumentOther;
