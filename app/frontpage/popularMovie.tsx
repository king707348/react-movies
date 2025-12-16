"use client"

import React, {useState, useEffect} from "react"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

import TruncatedText from "./TruncatedText"


export default function PopularMovie() {
    const [data, setData] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const baseUrl = "https://api.themoviedb.org/3"
            const url = `${baseUrl}/movie/now_playing?language=en-US&page=1`
            const movie_api = import.meta.env.VITE_movies_token_auth
            const options: RequestInit = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${movie_api}`
              }
            }
    
            const response = await fetch(url, options)
            const json = await response.json()
            console.log('fetch response', response.status, json)
    
            setData(json)
          } catch (err) {
            console.error('Failed to fetch movie auth:', err)
          } finally {
            setLoading(false)
          }
        }
    
        fetchData()
    }, [])

    useEffect(() => {
        console.log('data changed', data)
    }, [data])

    return (
      <div className="w-[800px] max-w-[100vw] p-4">
        {loading ? 
          <p>Loading…</p> : 
          <div>
              <div>Popular Date: {data.dates.minimum} ~ {data.dates.maximum}</div>
              <Carousel       
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {
                    data.results.map((d:any, index:number) => (
                      <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3">
                        <Card className="p-0">
                          <CardContent className="flex flex-col aspect-square p-6">
                              <img src={"https://image.tmdb.org/t/p/w533_and_h300_face/" + d.backdrop_path} 
                                alt="Image" 
                                className="rounded-md object-cover" 
                              />
                              <div className="flex justify-between align-middle">
                                <h3 className="text-2xl font-bold py-2">{d.original_title}</h3>
                                <div className="my-auto">{d.vote_average}</div>
                              </div>
                              <TruncatedText text={d.overview} />
                              
                          </CardContent>
                        </Card>
                        
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
              </Carousel>
        
          </div>
        }
      </div>
    )

}