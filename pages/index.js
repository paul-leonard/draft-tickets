import React from 'react'
import Head from 'next/head'
import DraftProgressDisplay from '../components/DraftProgressDisplay'
import TicketTable from '../components/TicketTable'
import Footer from '../components/Footer'
import HeroTitle from '../components/HeroTitle'
import Stripe from '../components/Stripe'
import styles from '../styles/Home.module.css'


export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Season Ticket Draft</title>
        <meta name="Season Ticket Drafting Tool" content="A web app to draft individual game tickets amongst a group of owners sharing season tickets to sporting events." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroTitle/>
        <Stripe/>

        <DraftProgressDisplay draft_order_props={props}/>

        <Stripe/>
        <TicketTable participants={props.participants}/>
      </main>

      <Footer/>
    </div>
  )
}


export async function getStaticProps() {

  return {
    props: {
        // response format from series RESTful API call
        "id": 8,
        "title": "kraken-2021",
        "organizer": {
            "id": 5,
            "password": "pbkdf2_sha256$216000$wbsj08bmEP3x$4V2riAHKicCLhjHfyfi+uUIml6bVCgfNTdC49Q662ug=",
            "last_login": "2021-01-21T19:09:51.121733Z",
            "is_superuser": false,
            "username": "krakenfan1",
            "first_name": "",
            "last_name": "",
            "email": "krakenfan1@test.com",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2021-01-21T17:56:05.994248Z",
            "groups": [],
            "user_permissions": []
        },
        "participants": [
            {
                "id": 8,
                "password": "pbkdf2_sha256$216000$uBMcAe02bMDP$fwiK+KfzTUxMnfjJTdWL47v/Ugh4/Nn+IXt0dqbI20Q=",
                "last_login": null,
                "is_superuser": false,
                "username": "krakenfan4",
                "first_name": "",
                "last_name": "",
                "email": "krakenfan4@test.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2021-01-21T17:57:12.004517Z",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 5,
                "password": "pbkdf2_sha256$216000$wbsj08bmEP3x$4V2riAHKicCLhjHfyfi+uUIml6bVCgfNTdC49Q662ug=",
                "last_login": "2021-01-21T19:09:51.121733Z",
                "is_superuser": false,
                "username": "krakenfan1",
                "first_name": "",
                "last_name": "",
                "email": "krakenfan1@test.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2021-01-21T17:56:05.994248Z",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 6,
                "password": "pbkdf2_sha256$216000$ylMbVQvK7UwU$3n9HxpQMNQ2T9FYhvnV3mJnxe3yYiFec3kXdm3K4uGs=",
                "last_login": null,
                "is_superuser": false,
                "username": "krakenfan2",
                "first_name": "",
                "last_name": "",
                "email": "krakenfan2@test.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2021-01-21T17:56:19.483047Z",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 7,
                "password": "pbkdf2_sha256$216000$9s3IOMYcfETE$FEo+5Vnb0qLX8HaOXkXS2e2DCPaPA/j47cGRf8Yjb4I=",
                "last_login": null,
                "is_superuser": false,
                "username": "krakenfan3",
                "first_name": "",
                "last_name": "",
                "email": "krakenfan3@test.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2021-01-21T17:56:35.536342Z",
                "groups": [],
                "user_permissions": []
            }
        ],
        "draft_order": "{\"draft_order\": [[5, 7, 8, 6], [6, 8, 7, 5]]}",
        "round": 1,
        "pick": 1,
        "remainder": 0,
        "draft_generation_complete": true,
        "draft_complete": false
    }
    }
}