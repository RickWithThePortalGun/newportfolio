'use client';
import React from "react";
import { startups } from "@constants";
// import { Button, Timeline } from 'flowbite-react';

const Experience = () => {
  return (
    <>
      {" "}
      {/* <div className="bg-transparent mt-[200px] flex flex-col justify-center items-center max-sm:px-[30px]">
        <p className="subtopic text-[40px] text-center">Proven Prowess.</p>
        <p className="text-center text-white pt-10">Startups</p>
        <div className="mt-10 flex flex-col ">
          <Timeline>
            {startups.map((startup, index) => (
              <Timeline.Item key={`startup-${index}`}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>{startup.company_name}</Timeline.Time>
                <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                  E-commerce & Marketing pages.
                </Timeline.Body>
                <Button color="gray">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Timeline.Content>
            </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div> */}
    </>
  );
};

export default Experience;
